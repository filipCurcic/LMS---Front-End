import { Injectable } from '@angular/core';
import CourseRealization from 'src/app/models/courseRealization';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseRealizationService {

  constructor(private httpClient: HttpClient) { }

  private courseRealizationUrl = 'http://localhost:8080/course-realization';

  getAllCourseRealizations() {
    return this.httpClient.get<CourseRealization[]>(this.courseRealizationUrl + `/all`);
  }

  getCourseRealizationById(id: String) {
    return this.httpClient.get<CourseRealization>(this.courseRealizationUrl + `/${id}`);
  }

  addCourseRealizatons(courseRealization: CourseRealization) {
    return this.httpClient.post(this.courseRealizationUrl + `/add`, courseRealization);
  }

  deleteCourseRealizations(id: String) {
    return this.httpClient.delete(this.courseRealizationUrl + `/${id}`);
  }

  editCourseRealizations(id: String, courseRealization: CourseRealization) {
    return this.httpClient.put(this.courseRealizationUrl + `/${id}`, courseRealization);
  }
}
