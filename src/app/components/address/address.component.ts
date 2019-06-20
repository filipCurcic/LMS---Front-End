import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FromErrorsService } from 'src/app/services/formErrors/from-errors.service';
import Address from 'src/app/models/address';
import { AddressService } from 'src/app/services/address-service/address.service';
import Country from 'src/app/models/country';
import City from 'src/app/models/city';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() public parrentForm: FormGroup;
  public addressForm : FormGroup;

  countries: Country[] = [];
  c: Country[] = [];
  cities: City[] = [];
  public address: Address = new Address();
  private edit = false;
  
  constructor(private formBuilder: FormBuilder, public formError: FromErrorsService, private addressService: AddressService, private route: ActivatedRoute) { 
  
  }


  ngOnInit() {
    //  this.addressForm = this.formBuilder.group({
    //    city: this.formBuilder.group({
    //      name: ['', {validators: [Validators.required]}],
    //      country: this.formBuilder.group({
    //          id: ['', {validators: [Validators.required]}]
    //      }),
    //    }),
    //    street: ['', {validators: [Validators.required]}],
    //    streetNumber: ['', {validators: [Validators.required]}],
     
    //  });

    this.addressForm = this.formBuilder.group({
      street: ['', {validators: [Validators.required]}],
      streetNumber: ['', {validators: [Validators.required]}],
      city: ['', {validators: [Validators.required]}],
    })

    // this.addressForm = this.formBuilder.group({
    //     city:  this.formBuilder.group({
    //     country: ['', {validators: [Validators.required]}],
    //   }),
         

    //   street: ['', {validators: [Validators.required]}],
    //   streetNumber: ['', {validators: [Validators.required]}],
     
    // });


    this.parrentForm.addControl("address", this.addressForm);

    this.getAllCountries();
  }

  
  getAllCountries() {
    this.addressService.getAllCountries().subscribe((data: Country[]) => {
      this.countries = data;
       if(this.edit){
         this.countries.forEach(country => {
           if(JSON.stringify(country) == JSON.stringify(this.address.city.country)){
             this.addressForm.patchValue({country : country});
             this.getCityByCountry(country.id);
           }
         })
       }
    });
  }

  getCityByCountry(countryId: number) {
    this.addressService.getAllByCountry(countryId).subscribe(data => {
      this.cities = data;
      console.log(this.cities);
      this.cities.forEach(city => {
        if(JSON.stringify(city) == JSON.stringify(this.address.city)){
          this.addressForm.patchValue({city : city});
        }
      })
    });
  }

 
}
