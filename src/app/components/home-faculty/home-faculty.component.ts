import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/services/faculty-service/faculty.service';
import Faculty from 'src/app/models/faculty';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course-service/course.service';
import Course from 'src/app/models/course';
import { Subscription } from 'rxjs';
//import { AuthorizationService } from 'src/app/services/login-service/authorization.service';


@Component({
  selector: 'app-home-faculty',
  templateUrl: './home-faculty.component.html',
  styleUrls: ['./home-faculty.component.css']
})
export class HomeFacultyComponent implements OnInit {

  private faculty : Faculty;
  private listOfStudyCourses;
  private listOfSubjects;
  isLoggedIn = false;

  private loggedInSubcription : Subscription;

  constructor(private facService: FacultyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getFaculty(this.route.snapshot.paramMap.get('id'));
    this.getStudyCourses(this.route.snapshot.paramMap.get('id'));
    
   }



  getFaculty(id: string){
    this.facService.getFaculty(id).subscribe((data) => {
      this.faculty = data;
    })
  };

  getStudyCourses(idFaculty: string){
    this.facService.getStudyCourses(idFaculty).subscribe((data) => {
      this.listOfStudyCourses = data;
      console.log(this.listOfStudyCourses);
    })
  };

  getSubjects(idFaculty: string){
    this.facService.getStudyCourses(idFaculty).subscribe((data) => {
      this.listOfSubjects = data;
      console.log(this.listOfSubjects);
    })
  };

}
