import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import Student from 'src/app/models/student';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }


  private serviceUrl = 'http://localhost:8080/studenti';

  
  getStudents():Observable<Student[]> {
    return this.http.get<Student[]>(this.serviceUrl);
  }

  getStudent(id: number): Observable<Student>{
    const url = `${this.serviceUrl}/${id}`;
    return this.http.get<Student>(url);
  }

  addStudent(student:Student):Observable<Student> {
    return this.http.post<Student>(this.serviceUrl, student, httpOptions);
  }


}
