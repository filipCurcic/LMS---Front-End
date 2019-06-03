import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Faculty from 'src/app/models/faculty';
import StudyCourse from 'src/app/models/studyCourse';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http: HttpClient) { }


  getFaculty(id: string){
    return this.http.get<Faculty>(`http://localhost:8080/faculty/${id}`);
  }

  getStudyCourses(idFac: string){
    return this.http.get<StudyCourse>(`http://localhost:8080/study-course/faculty/${idFac}`);
  }



}
