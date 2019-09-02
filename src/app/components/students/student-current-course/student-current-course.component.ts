import { Component, OnInit, ViewChild } from '@angular/core';
import Course from 'src/app/models/course';
import { CourseAttendingService } from 'src/app/services/course-service/course-attending.service';
import { AuthService } from 'src/app/authorization/auth.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-student-current-course',
  templateUrl: './student-current-course.component.html',
  styleUrls: ['./student-current-course.component.css']
})
export class StudentCurrentCourseComponent implements OnInit {

  panelOpenState = false;

  courses: Course[] = [];
  course : Course = new Course();
  displayedColumns: string[] = ['id', 'espb', 'name', 'actionsExamRegister'];
  dataSource = new MatTableDataSource<Course>(this.courses);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private courseAttendingService: CourseAttendingService, private authService: AuthService) { }

  ngOnInit() {
    
    let loggedUser = this.authService.getCurrentUser();
    if (loggedUser) {
      this.dataSource.paginator = this.paginator;
      this.getCurrentCourses(loggedUser);
    }
    else {
      console.log("unknown username");
    }
  }

  getCurrentCourses(username: String){
    this.courseAttendingService.getCurrentCourses(username).subscribe((data : Course[]) => {
      this.courses = data;
      this.dataSource.data = data;
      console.log(this.courses);
    });
  }
}
