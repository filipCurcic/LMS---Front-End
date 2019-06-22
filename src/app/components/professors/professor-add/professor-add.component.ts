import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Observable, Observer } from "rxjs";
import { ActivatedRoute } from '@angular/router';
import { FromErrorsService } from '../../../services/formErrors/from-errors.service'
import Professor from 'src/app/models/professor';
import { ProfessorsService } from 'src/app/services/professors-service/professors.service';

@Component({
  selector: 'app-professor-add',
  templateUrl: './professor-add.component.html',
  styleUrls: ['./professor-add.component.css']
})
export class ProfessorAddComponent implements OnInit {

  @Input() public parrentForm: FormGroup;
  public administratorStaffDataForm : FormGroup;
  imagePreview: string;

  private edit = false;
  private username : string;
  public professor : Professor
  public form : FormGroup;

  constructor(private route: ActivatedRoute, private professorService: ProfessorsService, public formError: FromErrorsService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(''),
      lastName: new FormControl(''),
      biography: new FormControl(''),
      umcn: new FormControl(''),
      profilePicturePath: new FormControl(''),
      profileImage: new FormControl(['', {asyncValidators: [this.mimeTypeValidator]}])
    });
    if(this.route.snapshot.paramMap.get("username")){
      this.edit = true;
      this.username = this.route.snapshot.paramMap.get("username");
      this.professorService.getProfessorByUsername(this.username).subscribe((data: Professor) => {
        this.professor = data;
        this.form.patchValue(this.professor);
      });
  }
}

addProfessor(){
  if(this.form.invalid){
    this.formError.markFormGroupTouched(this.form);
  }else{
    const prof = this.form.value;
    delete prof['registeredUser']['confirmPassword'];
    delete prof['profileImage'];

    console.log(prof)
    
    if(this.edit){
      prof.registeredUser.id = this.professor.registeredUser.id
      prof.address.id = this.professor.address.id;
      this.professor = prof;
    
      this.professorService.updateProfessor(this.username, this.professor, this.form.get('profileImage').value).subscribe();
    }else{
      this.professor = prof;
      this.professorService.addProfessor(prof, this.form.get('profileImage').value).subscribe();
      this.form.reset();
    }
    
  }
}


  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    if(file){
      this.form.patchValue({ profileImage: file });
      this.form.get("profileImage").updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;;
      };
      reader.readAsDataURL(file);
    }
  }

  
  markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
        control.markAsTouched();
        if (control.controls) {
            this.markFormGroupTouched(control);
        }
    });
  }
  
  mimeTypeValidator = (control: AbstractControl): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> => {
    const file = control.value as File;
    const fileReader = new FileReader();
    const frObs = Observable.create(
        (observer: Observer<{ [key: string]: any }>) => {
            fileReader.addEventListener("loadend", () => {
                const arr = new Uint8Array(fileReader.result as ArrayBuffer).subarray(0, 4);
                let header = "";
                let isValid = false;
                for (let i = 0; i < arr.length; i++) {
                    header += arr[i].toString(16);
                }
                switch (header) {
                    case "89504e47":
                        isValid = true;
                        break;
                    case "ffd8ffe0":
                    case "ffd8ffe1":
                    case "ffd8ffe2":
                    case "ffd8ffe3":
                    case "ffd8ffe8":
                        isValid = true;
                        break;
                    default:
                        isValid = false;
                        break;
                }
                if (isValid) {
                    observer.next(null);
                } else {
                    observer.next({ invalidMimeType: true });
                }
                observer.complete();
            });
            if (file) {
                fileReader.readAsArrayBuffer(file);
            }else{
                observer.next(null);
                observer.complete();
            }
        }
    );
    return frObs;
  }

}
