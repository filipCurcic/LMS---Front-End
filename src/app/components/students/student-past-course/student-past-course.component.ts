import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CourseAttendingService } from 'src/app/services/course-service/course-attending.service';
import { AuthService } from 'src/app/authorization/auth.service';
import ExamDTO from 'src/app/models/Exam';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-student-past-course',
  templateUrl: './student-past-course.component.html',
  styleUrls: ['./student-past-course.component.css']
})
export class StudentPastCourseComponent implements OnInit {

  @Input() exams: ExamDTO[] = [];
  exam?: ExamDTO = new ExamDTO();
  avgGrade?: number;
  totalEcts?: number;
  // public fetched: boolean = false;
  displayedColumns: string[] = ['id','course', 'points', 'grade', 'date', 'studyProgramName', 'year', 'espb'];
  dataSource = new MatTableDataSource<ExamDTO>(this.exams);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private courseAttendingService: CourseAttendingService, private authService: AuthService) { 
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    
    let loggedUser = this.authService.getCurrentUser();
    if (loggedUser) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.data = this.exams;
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
          // this.fetched = true;
          this.dataSource.data = this.exams;
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
    let espb = 0;
    for (let i = 0; i < this.exams.length; i++) {
      if (this.exams[i].espb != null) {
        espb += this.exams[i].espb;
      }
    }
    this.totalEcts = espb;
  }

}


