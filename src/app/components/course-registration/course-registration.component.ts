import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Course from 'src/app/models/course';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course-service/course.service';
import { StudyYearService } from 'src/app/services/study-year/study-year.service';
import StudyYear from 'src/app/models/studyYear';

@Component({
  selector: 'app-course-registration',
  templateUrl: './course-registration.component.html',
  styleUrls: ['./course-registration.component.css']
})
export class CourseRegistrationComponent implements OnInit {

  public courseAdd: FormGroup
  public course = new Course();
  private edit = false;
  private id: String;
 // public courses: Course[] = [];
  public studyYears: StudyYear[] = [];
  public list: boolean [] = [true, false]
 
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private courseService: CourseService, private studyYearService: StudyYearService) { }

  ngOnInit() {
    this.courseAdd = this.formBuilder.group({
      name: ['', {validators: [Validators.required]}],
      espb: ['', {validators: [Validators.required]}],
      mandatory: [ '' , {validators: [Validators.required]}],
      numberOfLectures: ['', {validators: [Validators.required]}],
      numberOfExercises: ['', {validators: [Validators.required]}],
      otherTypesOfTeachings: ['', {validators: [Validators.required]}],
      researchWork: ['', {validators: [Validators.required]}],
      otherClasses: ['', {validators: [Validators.required]}],
      yearsOfStudy: ['', {validators: [Validators.required]}]
    });

    if(this.route.snapshot.paramMap.get("id")){
      this.edit = true;
      this.id = this.route.snapshot.paramMap.get("id");
      this.courseService.getCourseById(this.id).subscribe((data: Course) => {
        this.course = data;
        this.courseAdd.patchValue(this.course);
      });
      this.getStudyYear();
    } 
    else {
      this.getStudyYear();
    }
  
  }

  getStudyYear() {
    this.studyYearService.getAll().subscribe((data: StudyYear[]) => {
      this.studyYears = data;
      console.log(this.studyYears)
      if(this.edit){
        this.studyYears.forEach(sy => {
          if(JSON.stringify(sy) == JSON.stringify(this.course.yearsOfStudy)){
            this.courseAdd.patchValue({sy : sy});
          }
        })
      }
   });
  }

  save(){
    const c = this.courseAdd.value;
    this.course = c;
    //delete sc['courseImages'];
    console.log(c)

    if(this.edit){
      this.courseService.updateCourse(this.id, this.course).subscribe();
    }else{
      
      this.courseService.addCourse(this.course).subscribe(_=>{
        this.courseAdd.reset();
      })
      
    }
    
  }

}
