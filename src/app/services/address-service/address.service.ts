import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import  Country  from '../../models/country'
import City from 'src/app/models/city';
import Address from 'src/app/models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {



  constructor(private httpClient: HttpClient) {

   }

   private countryUrl = 'http://localhost:8080/country';
   private cityUrl = 'http://localhost:8080/city';
   private addressUrl = 'http://localhost:8080/address';

  getOneAddress(id:String) {
    return this.httpClient.get<Address>(this.addressUrl + `/${id}`);
  } 
  getAllCountries() {
     return this.httpClient.get<Country[]>(this.countryUrl + `/all`);
   }

  getOneCountry(id: String) {
    return this.httpClient.get<Country>(this.countryUrl + `/${id}`);
  }

  getAllCities() {
    return this.httpClient.get<City[]>(this.cityUrl + `/all`);
  }

  getOneCity(id: String) {
    return this.httpClient.get<City>(this.cityUrl + `/${id}`);
  }

  getAllByCountry(countryId: number) {
    return this.httpClient.get<City[]>(this.cityUrl+`/country/${countryId}`);
  }

}
