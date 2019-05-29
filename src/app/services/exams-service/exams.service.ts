import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import Exam from 'src/app/models/exam'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  constructor(private http: HttpClient) { }

  private examUrl = 'http://localhost:8080/exam';


  
  getExams():Observable<Exam[]> {
    return this.http.get<Exam[]>(this.examUrl+`/all`);
  }

  getExam(id:number):Observable<Exam> {
    return this.http.get<Exam>(this.examUrl+`/${id}`);
  }
  
/*
  deleteExam(id: number) {
    return this.http.delete(this.examUrl+`/${id}`);
  }

  addExam(student:Exam, image:File) {
    const postData = new FormData();
    postData.append("profileImage", image, image.name);
    postData.append("data", JSON.stringify(student));
    return this.http.post(this.examUrl+'/add', postData);
  }

  updateExam(id:string, student:Exam) {
    return this.http.put(this.examUrl+`/${id}`, student)
  }
*/

}
