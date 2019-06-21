import { Component, OnInit, Input } from '@angular/core';
import { StudentportalService } from 'src/app/services/studentportal-service/studentportal.service';
import { AuthService } from 'src/app/authorization/auth.service';
import { Student } from 'src/app/models/student';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-checkin-exam',
  templateUrl: './checkin-exam.component.html',
  styleUrls: ['./checkin-exam.component.css']
})
export class CheckinExamComponent implements OnInit {

  public listOfExams;
  private student: Student;
  private studentId: any;

  constructor(private portalService: StudentportalService, private dataService: DataService) { }

  ngOnInit() {
    this.studentId = localStorage.getItem('userID');
    this.getExamsForStudent(this.studentId);
  }

  getExamsForStudent(studentId: number){
    this.portalService.getExamsForStudent(studentId).subscribe((data) => {
      this.listOfExams = data;
      console.log(this.listOfExams);
    });
  }


  checkin(id: Number){
    console.log(id)
  }




}
