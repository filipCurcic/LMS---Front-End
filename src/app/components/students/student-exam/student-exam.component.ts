import { Component, OnInit, Input, ViewChild } from '@angular/core';
import ExamDTO from 'src/app/models/Exam';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-student-exam',
  templateUrl: './student-exam.component.html',
  styleUrls: ['./student-exam.component.css']
})
export class StudentExamComponent implements OnInit {

  @Input() exams: ExamDTO[] = [];
  exam?: ExamDTO = new ExamDTO();
  avgGrade?: number;
  totalEcts?: number;
  displayedColumns: string[] = ['id','course', 'points', 'grade', 'date', 'studyProgramName', 'year', 'espb'];
  dataSource = new MatTableDataSource<ExamDTO>(this.exams);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.data = this.exams;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
