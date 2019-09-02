import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import TeacherOnRealization from 'src/app/models/teacherOnRealization';

@Injectable({
  providedIn: 'root'
})
export class ProfessrorOnRealizationService {

  constructor(private httpClient: HttpClient) { }

  private professorOnRealizationUrl = 'http://localhost:8080/teacher-on-realization';

  getAllProfessorsOnRealization() {
    return this.httpClient.get<TeacherOnRealization>(this.professorOnRealizationUrl + `/all`);
  }

  getProfessorOnRealizationById(id: String) {
    return this.httpClient.get<TeacherOnRealization>(this.professorOnRealizationUrl + `/${id}`);
  }

  addProfessorsOnRealization(professorOnRealization: TeacherOnRealization) {
    return this.httpClient.post(this.professorOnRealizationUrl + `/add`, professorOnRealization);
  }

  deleteProfessorOnRealization(id: String) {
    return this.httpClient.delete(this.professorOnRealizationUrl + `/${id}`);
  }

  editProfessorOnRealization(id: String, professorOnRealization:TeacherOnRealization) {
    return this.httpClient.put(this.professorOnRealizationUrl + `/${id}`, professorOnRealization);
  }

}
