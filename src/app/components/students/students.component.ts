import { Student } from '../../models/student';
import { StudentsService } from 'src/app/services/students-service/students.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students : Student[] = [];
  student : Student = new Student();
  displayedColumns: string[] = ['id', 'name', 'lastName', 'jmbg', 'registeredUser.username',  'actionsEdit', 'actionsDelete'];
  dataSource = new MatTableDataSource<Student>(this.students);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(private studentService: StudentsService) {}

  ngOnInit() {
    // this.dataSource.sortingDataAccessor = (item, property) => {
    //   if (property.includes('.')) return property.split('.').reduce((o,i)=>o[i], item)
    //     return item[property];
    // };
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getAll();
    
  }

  getAll(){
    this.studentService.getStudents().subscribe((data: Student[]) => {
      this.students = data;
      this.dataSource.data = data;
    });
  }

  delete(id: string){
    this.studentService.deleteStudent(id).subscribe((data: any) => {
      this.getAll();
    });
  }

  update(id: string, student: Student, image: File){
    this.studentService.updateStudent(id, student, image).subscribe((data: any) => {
      this.getAll();
    });
  }
}