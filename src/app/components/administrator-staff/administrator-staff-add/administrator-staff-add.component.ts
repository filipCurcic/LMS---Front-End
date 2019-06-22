import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Observable, Observer } from "rxjs";
import { ActivatedRoute } from '@angular/router';
import { FromErrorsService } from '../../../services/formErrors/from-errors.service'
import AdministratorStaff from 'src/app/models/administratorStaff';
import { AdministratorStaffService } from 'src/app/services/administrator-staff/administrator-staff.service';


@Component({
  selector: 'app-administrator-staff-add',
  templateUrl: './administrator-staff-add.component.html',
  styleUrls: ['./administrator-staff-add.component.css']
})
export class AdministratorStaffAddComponent implements OnInit {

  @Input() public parrentForm: FormGroup;
  public administratorStaffDataForm : FormGroup;
  imagePreview: string;

  private edit = false;
  private username : string;
  public administratorStaff : AdministratorStaff
  public form : FormGroup;

  constructor(private route: ActivatedRoute, private adminStaffService: AdministratorStaffService, public formError: FromErrorsService) { }

  ngOnInit() {
    this.form = new FormGroup({
      jmbg: new FormControl(''),
      name: new FormControl(''),
      surname: new FormControl(''),
      profilePicturePath: new FormControl(''),
      profileImage: new FormControl(['', {asyncValidators: [this.mimeTypeValidator]}])
    });
    if(this.route.snapshot.paramMap.get("username")){
      this.edit = true;
      this.username = this.route.snapshot.paramMap.get("username");
      this.adminStaffService.getOneByUsername(this.username).subscribe((data: AdministratorStaff) => {
        this.administratorStaff = data;
        this.form.patchValue(this.administratorStaff);
      });
  }
}

addAdminStaff(){
  if(this.form.invalid){
    this.formError.markFormGroupTouched(this.form);
  }else{
    const adm = this.form.value;
    delete adm['registeredUser']['confirmPassword'];
    delete adm['profileImage'];

    console.log(adm)
    
    if(this.edit){
      adm.registeredUser.id = this.administratorStaff.registeredUser.id
      adm.address.id = this.administratorStaff.address.id;
      this.administratorStaff = adm;
    
      this.adminStaffService.updateAdminStaff(this.username, this.administratorStaff, this.form.get('profileImage').value).subscribe();
    }else{
      this.administratorStaff = adm;
      this.adminStaffService.addAdminStaff(adm, this.form.get('profileImage').value).subscribe();
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
