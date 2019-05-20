import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl  } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  users:string[]= ['Professor', 'Student']

  selected:string;
  sYear:string;
  
  titleList: string[] = ['Master', 'Doctor'];

  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required],
      jmbgCtrl: ['', Validators.required],
      addressCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      userCtrl: ['', Validators],
      bioCtrl: ['', Validators],
      sYearCtrl: ['', Validators],
      titleCtrl: ['', Validators]
    });
   
  }

}
