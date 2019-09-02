import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Course from 'src/app/models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient) { }

  private courseUrl = 'http://localhost:8080/course';

  getAllCourses() {
    return this.httpClient.get<Course[]>(this.courseUrl + `/all`);
  }

  getCourseById(id: String) {
    return this.httpClient.get<Course>(this.courseUrl + `/${id}`);
  }

  addCourse(course: Course) {
    return this.httpClient.post(this.courseUrl + `/add`, course);
  }

  deleteCourse(id: String) {
    return this.httpClient.delete(this.courseUrl + `/${id}`);
  }

  updateCourse(id: String, course: Course) {
    return this.httpClient.put(this.courseUrl + `/${id}`, course);
  }

}
