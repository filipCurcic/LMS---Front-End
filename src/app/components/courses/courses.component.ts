import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { CourseService } from 'src/app/services/course-service/course.service';
import { Observable } from 'rxjs';
import Course from 'src/app/models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private courseService:CourseService) { }

  dataSource = new CourseDataSource(this.courseService);

  ngOnInit() {
  }

  displayedColumns = ['id', 'name', 'epsb', 'mandatory', 'numberOfLectures', 
  'numberOfExercises', 'otherTypesOfTeachings', 'researchWork', 'otherClasses', 
  'precondition', 'actionsEdit', 'actionsDelete'];

}

export class CourseDataSource extends DataSource<any> {
  constructor(private courseService: CourseService) {
    super();
  }

  
  connect(): Observable<Course[]> {
    return this.courseService.getCourses();
  }

  disconnect() {

  }
}