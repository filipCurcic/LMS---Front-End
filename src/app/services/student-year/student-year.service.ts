import { Injectable } from '@angular/core';
import StudentOnYear from 'src/app/models/studentOnYear';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentYearService {

  constructor(private http: HttpClient) { }

  private studentOnYearUrl = "http://localhost:8080/student-on-year";

  getStudentOnYear():Observable<StudentOnYear[]> {
    return this.http.get<StudentOnYear[]>(this.studentOnYearUrl+`/all`);
  }

}
