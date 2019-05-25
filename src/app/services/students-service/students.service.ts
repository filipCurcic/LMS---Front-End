import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import Student from 'src/app/models/student';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  private studentUrl = 'http://localhost:8080/student';

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


}
