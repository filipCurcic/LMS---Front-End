import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import University from 'src/app/models/university';
import Faculty from 'src/app/models/faculty';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(private http: HttpClient) {}

  getUniversity(id: string){
    return this.http.get<University>(`http://localhost:8080/university/${id}`);
  }

  getFacultiesOnUni(id: number){
    return this.http.get<Faculty[]>(`http://localhost:8080/faculty/uni/${id}`);
  }

  getUniversities() {
    return this.http.get<University[]>(`http://localhost:8080/university/all`);
  }


}
