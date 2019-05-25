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

<<<<<<< HEAD
  private studentUrl = 'http://localhost:8080/student';
=======
>>>>>>> 1279ef53b83da4ac32351347b12b8333af05e435

  private serviceUrl = 'http://localhost:8080/studenti';

  
  getStudents():Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl+`/all`);
  }

  getStudent(id:number):Observable<Student> {
    return this.http.get<Student>(this.studentUrl+`/${id}`);
  }

  deleteStudent(id: number) {
    return this.http.delete(this.studentUrl+`/${id}`);
  }

  addStudent(student:Student, image:File) {
    const postData = new FormData();
    postData.append("profileImage", image, image.name);
    postData.append("data", JSON.stringify(student));
    return this.http.post(this.studentUrl+'/add', postData);
  }

  updateStudent(id:string, student:Student) {
    return this.http.put(this.studentUrl+`/${id}`, student)
  }

  getStudent(id: number): Observable<Student>{
    const url = `${this.serviceUrl}/${id}`;
    return this.http.get<Student>(url);
  }

  addStudent(student:Student):Observable<Student> {
    return this.http.post<Student>(this.serviceUrl, student, httpOptions);
  }


}
