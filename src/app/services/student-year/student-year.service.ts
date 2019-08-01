import { Injectable } from '@angular/core';
import StudentOnYear from 'src/app/models/studentOnYear';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentYearService {

  constructor(private httpClient: HttpClient) { }

  private studentOnYearUrl = "http://localhost:8080/student-on-year";

  getStudentOnYear():Observable<StudentOnYear[]> {
    return this.httpClient.get<StudentOnYear[]>(this.studentOnYearUrl+`/all`);
  }

  getOne(id: String) {
    return this.httpClient.get<StudentOnYear>(this.studentOnYearUrl + `/${id}`);
  }

  add(studentOnYear: StudentOnYear) {
    return this.httpClient.post(this.studentOnYearUrl +`/add`, studentOnYear);
  }

  addStudentOnYear(soy: StudentOnYear) {
    return this.httpClient.post(this.studentOnYearUrl + `/add`, soy)
  }

  delete(id: String) {
    return this.delete(this.studentOnYearUrl + `/${id}`)
  }

  edit(id: String, studentOnYear: StudentOnYear) {
    return this.httpClient.put(this.studentOnYearUrl + `/${id}`, studentOnYear);
  }
}
