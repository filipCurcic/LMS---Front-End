import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import Student from '../../models/student';
import { StudentsService } from 'src/app/services/students-service/students.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private StudentsService:StudentsService) { }

  dataSource = new StudentsDataSource(this.StudentsService);

  displayedColumns = ['id', 'name', 'email', 'phone', 'actionsEdit', 'actionsDelete'];

  ngOnInit() {
  }

  

}
export class StudentsDataSource extends DataSource<any> {
  constructor(private StudentsService: StudentsService) {
    super();
  }

  
  connect(): Observable<Student[]> {
    return this.StudentsService.getStudents();
  }

  disconnect() {

  }
}