import { Injectable } from '@angular/core';
import { Administrator } from '../../models/administrator';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private administratorUrls = "http://localhost:8080/administrator";

  constructor(private httpClient: HttpClient) {

   }

   getAllAdministrators() {
     return this.httpClient.get<Administrator[]>(this.administratorUrls + `/all`);
   }

   getOneAdministrator(id: string) {
     return this.httpClient.get<Administrator[]>(this.administratorUrls + `/${id}`)
   }
   
   addAdministrator(administrator:Administrator) {
      return this.httpClient.post(this.administratorUrls+'/add', administrator);
    }

    deleteAdministrator(id: String) {
      return this.httpClient.delete(this.administratorUrls+`/${id}`);
    }

    updateAdministrator(id:string, administrator:Administrator) {
      return this.httpClient.put(this.administratorUrls+`/${id}`, administrator)
    }


}
