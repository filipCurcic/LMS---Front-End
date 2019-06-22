import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Faculty from 'src/app/models/faculty';
import StudyCourse from 'src/app/models/studyCourse';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http: HttpClient) { }

  getAllFaculties() {
    return this.http.get<Faculty[]>(`http://localhost:8080/faculty/all`);
  }

  getFaculty(id: string){
    return this.http.get<Faculty>(`http://localhost:8080/faculty/${id}`);
  }

  getStudyCourses(idFac: string){
    return this.http.get<StudyCourse>(`http://localhost:8080/study-course/faculty/${idFac}`);
  }

  addFaculty(faculty: Faculty) {
    return this.http.post(`http://localhost:8080/faculty/add`, faculty);
  }

  editFaculty(id: String, faculty: Faculty) {
    return this.http.put(`http://localhost:8080/faculty/edit/${id}`, faculty);
  }



}
