import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import StudyCourse from 'src/app/models/studyCourse';

@Injectable({
  providedIn: 'root'
})
export class StudyCourseService {

  constructor(private httpClient: HttpClient) {

   }

   private studyCourseUrl = 'http://localhost:8080/study-course';

   getAllStudyCourses() {
     return this.httpClient.get<StudyCourse[]>(this.studyCourseUrl + `/all`);
   }

   getOneStudyCourse(id: String) {
     return this.httpClient.get<StudyCourse>(this.studyCourseUrl + `/${id}`);
   }

   addStudyCourse(studyCourse: StudyCourse, image: File) {
    const postData = new FormData();
    if(image) {
      postData.append("courseImages", image, image.name);
    } postData.append("data", JSON.stringify(studyCourse));
    return this.httpClient.post(this.studyCourseUrl+'/add', postData);
   }

   deleteStudyCourse(id: String) {
     return this.httpClient.delete(this.studyCourseUrl + `/${id}`);
   }

   updateStudyCourse(id: String, studyCourse: StudyCourse, image: File) {
    const postData = new FormData();
    if(image) {
      postData.append("courseImages", image, image.name);
    }
    postData.append("data", JSON.stringify(studyCourse));
    return this.httpClient.put(this.studyCourseUrl+`/edit/${id}`, postData)
   }

   add(studyProgram:StudyCourse) {
    return this.httpClient.post(this.studyCourseUrl + `/`, studyProgram);
  }
}
