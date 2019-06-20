import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import StudyYear from 'src/app/models/studyYear';

@Injectable({
  providedIn: 'root'
})
export class StudyYearService {

  constructor(private httpClient: HttpClient) { 

  }

  private studyYearUrl = 'http://localhost:8080/study-year';

  getAll() {
    return this.httpClient.get<StudyYear[]>(this.studyYearUrl + `/all`);
  }

  getOne(id: String) {
    return this.httpClient.get<StudyYear>(this.studyYearUrl + `/${id}`);
  }

  add(studyYear: StudyYear) {
    return this.httpClient.post(this.studyYearUrl +`/add`, studyYear);
  }

  delete(id: String) {
    return this.delete(this.studyYearUrl + `/${id}`)
  }

  edit(id: String, studyYear: StudyYear) {
    return this.httpClient.put(this.studyYearUrl + `/${id}`, studyYear);
  }
}
 