import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FromErrorsService } from 'src/app/services/formErrors/from-errors.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  @Input() public parrentForm: FormGroup;
  public registeredUserDataForm : FormGroup;

  constructor(private formBuilder: FormBuilder, public formError: FromErrorsService) { 
    
  }

  ngOnInit(){
    this.registeredUserDataForm = this.formBuilder.group({
      username: ['', {validators: [Validators.required, Validators.minLength(3)]}],
      email: ['', {validators: [Validators.required, Validators.email]}],
      password: ['', {validators: [Validators.required, Validators.minLength(8)]}],
      confirmPassword: [''],
    }, {
      validators: [this.MustMatch('password', 'confirmPassword')]
    });

    this.parrentForm.addControl("registeredUser", this.registeredUserDataForm);
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
  
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }
  
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

}
