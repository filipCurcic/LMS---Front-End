import { Component, OnInit, ViewChild } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import { Student } from '../../models/student';
import { StudentsService } from 'src/app/services/students-service/students.service';
import { Observable } from 'rxjs';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { saveAs } from 'file-saver';
import { FileService } from 'src/app/services/file-service/file.service';


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

  constructor(private studentService: StudentsService, private fileService: FileService) {

  }

  ngOnInit() {
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

  exportDataToPDF() {
    this.fileService.exportDataToPDF({'fileUrl': this.studentService.studentUrl, 'fileName': 'students.pdf'}).subscribe(data => {
      saveAs(new Blob([data], { type: 'application/pdf' }), 'students.pdf');
    });
  }
}