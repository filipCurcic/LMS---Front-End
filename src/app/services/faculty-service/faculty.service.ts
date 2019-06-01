import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Faculty from 'src/app/models/faculty';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http: HttpClient) { }

  private facultyUrl = 'http://localhost:8080/faculty';


  updateFaculty(id:number, faculty:Faculty) {
    return this.http.put(this.facultyUrl+`/${id}`, faculty)
  }


}
