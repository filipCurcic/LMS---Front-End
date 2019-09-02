import { Component, OnInit, ViewChild } from '@angular/core';
import Course from 'src/app/models/course';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-course-realization',
  templateUrl: './course-realization.component.html',
  styleUrls: ['./course-realization.component.css']
})
export class CourseRealizationComponent implements OnInit {

  courses : Course[] = [];
  course : Course = new Course();
  displayedColumns: string[] = ['id', 'name', 'mandatory', 'espb', 'actionsEdit', 'actionsDelete'];
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
