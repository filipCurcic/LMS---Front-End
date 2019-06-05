import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Observable, Observer } from "rxjs";
import { Student } from '../../../models/student';
import { StudentsService } from '../../../services/students-service/students.service';
import { ActivatedRoute } from '@angular/router';
import { FromErrorsService } from '../../../services/formErrors/from-errors.service'


@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  @Input() public parrentForm: FormGroup;
  public studentDataForm : FormGroup;
  imagePreview: string;

  private edit = false;
  private username : string;
  public student: Student;
  public form : FormGroup;

  constructor(private route: ActivatedRoute, private studentService: StudentsService, public formError: FromErrorsService) { }

  ngOnInit() {
  
    this.form = new FormGroup({
      jmbg: new FormControl(''),
      name: new FormControl(''),
      lastName: new FormControl(''),
      profilePicturePath: new FormControl(''),
      profileImage: new FormControl(['', {asyncValidators: [this.mimeTypeValidator]}])
    });
    if(this.route.snapshot.paramMap.get("id")){
      this.edit = true;
      this.username = this.route.snapshot.paramMap.get("id");
      this.studentService.getOneByUsername(this.username).subscribe((data: Student) => {
        this.student = data;
        this.form.patchValue(this.student);
      });
  }
}

add(){
  if(this.form.invalid){
    this.formError.markFormGroupTouched(this.form);
  }else{
    const std = this.form.value;
    delete std['registeredUser']['confirmPassword'];
    delete std['profileImage'];

    console.log(std)
    
    if(this.edit){
      std.registeredUser.id = this.student.registeredUser.id
      std.address.id = this.student.address.id;
      this.student = std;
    
      this.studentService.updateStudent(this.username, this.student, this.form.get('profileImage').value).subscribe();
    }else{
      this.student = std;
      this.studentService.addStudent(std, this.form.get('profileImage').value).subscribe();
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
