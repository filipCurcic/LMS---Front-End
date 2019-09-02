import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import CourseAttending from 'src/app/models/courseAttending';
import Course from 'src/app/models/course';
import ExamDTO from 'src/app/models/Exam';

@Injectable({
  providedIn: 'root'
})
export class CourseAttendingService {

  constructor(private httpClient: HttpClient) { }

  private courseAttendingUrl = 'http://localhost:8080/course-attending';

  getAllCourseAttendings(){
    return this.httpClient.get<CourseAttending[]>(this.courseAttendingUrl + `/all`);
  }

  getCourseAttendingById(id:String) {
    return this.httpClient.get<CourseAttending>(this.courseAttendingUrl + `/${id}`);
  }

  addCourseAttending(courseAttending: CourseAttending) {
    return this.httpClient.post(this.courseAttendingUrl + `/add`, courseAttending);
  }

  editCourseAttending(id: String, courseAttending:CourseAttending){
    return this.httpClient.put(this.courseAttendingUrl + `/${id}`, courseAttending);
  }

  deleteCourseAttending(id:String) {
    return this.httpClient.delete(this.courseAttendingUrl + `/${id}`);
  }

  getStudentPastCourses(username: String) {
    return this.httpClient.get<ExamDTO[]>(this.courseAttendingUrl + `/past-courses/${username}`)
  }

  getCurrentCourses(username: String) {
    return this.httpClient.get<Course[]>(this.courseAttendingUrl + `/current-courses/${username}`)
  }
}
