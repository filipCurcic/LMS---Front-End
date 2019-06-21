import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentportalService {

  constructor(private http: HttpClient) { }


  getExamsForStudent(studentId: number){
    return this.http.get<Event[]>(`http://localhost:8080/exam/all/student/${studentId}`);
  }
   






}
