import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { CourseService } from 'src/app/services/course-service/course.service';
import { Observable } from 'rxjs';
import Course from 'src/app/models/course';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses : Course[] = [];
  course : Course = new Course();
  displayedColumns: string[] = ['id', 'name', 'mandatory', 'espb', 'yearsOfStudy.studyYear', 'actionsEdit', 'actionsDelete'];
  dataSource = new MatTableDataSource<Course>(this.courses);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getAll();
  }

  getAll(){
    this.courseService.getAllCourses().subscribe((data: Course[]) => {
      this.courses = data;
      this.dataSource.data = data;
    });
  }

  delete(id: string){
    this.courseService.deleteCourse(id).subscribe((data: any) => {
      this.getAll();
    });
  }

  update(id: string, course: Course){
    this.courseService.updateCourse(id, course).subscribe((data: any) => {
      this.getAll();
    });
  }
}