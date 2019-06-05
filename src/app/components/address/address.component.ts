import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FromErrorsService } from 'src/app/services/formErrors/from-errors.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() public parrentForm: FormGroup;
  public addressForm : FormGroup;


  constructor(private formBuilder: FormBuilder, public formError: FromErrorsService) { 
  
  }

  ngOnInit() {
    this.addressForm = this.formBuilder.group({
      city: this.formBuilder.group({
        name: ['', {validators: [Validators.required]}],
        country: this.formBuilder.group({
          name: ['', {validators: [Validators.required]}],
        }),
      }),
      street: ['', {validators: [Validators.required]}],
      streetNumber: ['', {validators: [Validators.required]}],
    });

    this.parrentForm.addControl("address", this.addressForm);
  }

}
