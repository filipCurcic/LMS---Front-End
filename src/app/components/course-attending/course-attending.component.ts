import { Component, OnInit } from '@angular/core';
import ExamDTO from 'src/app/models/Exam';
import { CourseAttendingService } from 'src/app/services/course-service/course-attending.service';
import { AuthService } from 'src/app/authorization/auth.service';

@Component({
  selector: 'app-course-attending',
  templateUrl: './course-attending.component.html',
  styleUrls: ['./course-attending.component.css']
})
export class CourseAttendingComponent implements OnInit {

  exams?: ExamDTO[] = [];
  avgGrade?: number;
  totalEcts?: number;
  public fetched: boolean = false;

  constructor(private courseAttendingService: CourseAttendingService, private authService: AuthService) { }

  ngOnInit() {
    let loggedUser = this.authService.getCurrentUser();
    if (loggedUser) {
      this.getPastCourses(loggedUser);
    }
    else {
      console.log("unknown username");
    }
  }

  getPastCourses(username: String) {
    this.courseAttendingService.getStudentPastCourses(username).subscribe(
      (data: ExamDTO[]) => {
        if (data != null) {
          for (let i = 0; i < data.length; i++) {
            let exam = new ExamDTO();
            exam.date = data[i][5];
            exam.grade = data[i][0];
            exam.points = data[i][4];
            exam.studyProgramName = data[i][3];
            exam.course = data[i][1];
            exam.year = data[i][2];
            exam.espb = data[i][6];
            this.exams.push(exam);
          };
          this.fetched = true;
        };
        this.getAvgGrade();
        this.getTotalEcts();
      });
  }

  getAvgGrade() {
    let sum = 0;
    let total = 0
    for (let i = 0; i < this.exams.length; i++) {
      if (this.exams[i].grade != null) {
        sum += this.exams[i].grade;
        total++;
      }
    };
    this.avgGrade = sum / total;
  }

  getTotalEcts() {
    let ects = 0;
    for (let i = 0; i < this.exams.length; i++) {
      if (this.exams[i].espb != null) {
        ects += this.exams[i].espb;
      }
    }
    this.totalEcts = ects;
  }
}
