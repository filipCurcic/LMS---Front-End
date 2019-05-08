import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import Student from 'src/app/models/student';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

  getStudents():Observable<Student[]> {
    return this.http.get<Student[]>(this.serviceUrl);
  }


}
