import { Injectable } from '@angular/core';
import University from 'src/app/models/university';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(private http:HttpClient) { }

  private universityUrl = 'http://localhost:8080/university';


  updateUniversity(id:number, university:University) {
    return this.http.put(this.universityUrl+`/${id}`, university)
  }



}
