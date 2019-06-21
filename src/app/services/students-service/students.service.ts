import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Student } from '../../models/student';


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

  private studentUrl = 'http://localhost:8080/student';

  
  getStudents() {
    return this.http.get<Student[]>(this.studentUrl+`/all`);
  }

  getStudent(id:String) {
    return this.http.get<Student>(this.studentUrl+`/${id}`);
  }

  getOneByUsername(username: String) {
    return this.http.get<Student>(this.studentUrl+`/username/${username}`);
  }

  deleteStudent(id: String) {
    return this.http.delete(this.studentUrl+`/${id}`);
  }

  addStudent(student:Student, image:File) {
    const postData = new FormData();
    if(image) {
      postData.append("profileImage", image, image.name);
    } postData.append("data", JSON.stringify(student));
    return this.http.post(this.studentUrl+'/add', postData);
  }

  updateStudent(username: string, student:Student, image: File) {
    const postData = new FormData();
    if(image) {
      postData.append("profileImage", image, image.name);
    }
    postData.append("data", JSON.stringify(student));
    return this.http.put(this.studentUrl+`/${username}`, postData)
  }

  getLoggedStudent(username: String){
    return this.http.get<Student>(this.studentUrl + `/logged/${username}`);
  }
  

}
