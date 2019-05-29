import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Course from 'src/app/models/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  private courseUrl = 'http://localhost:8080/course';

  getCourses():Observable<Course[]> {
    return this.http.get<Course[]>(this.courseUrl+`/all`);
  }

  getCourse(id:number):Observable<Course[]> {
    return this.http.get<Course[]>(this.courseUrl+`/${id}`);
  }

  addCourse(course:Course) {
    return this.http.post(this.courseUrl+'/add', course);
  }

  deleteCourse(id: String) {
    return this.http.delete(this.courseUrl+`/${id}`);
  }

  updateCourse(id:string, Course:Course) {
    return this.http.put(this.courseUrl+`/${id}`, Course)
  }


}
