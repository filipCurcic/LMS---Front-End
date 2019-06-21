import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authorization/auth.service';
import { StudentsService } from 'src/app/services/students-service/students.service';
import { DataService } from 'src/app/services/data.service';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student-portal',
  templateUrl: './student-portal.component.html',
  styleUrls: ['./student-portal.component.css']
})
export class StudentPortalComponent implements OnInit {

  private loggedUsername: String;
  private loggedUser: Student;
  private userID: any;

  constructor(private user: AuthService, private studentService: StudentsService, private dataService: DataService) { }

  ngOnInit() {
    this.userID = localStorage.getItem('userID');
  }


}
