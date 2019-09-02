import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course-service/course.service';
import { CourseRealizationService } from 'src/app/services/course-service/course-realization.service';
import { StudyYearService } from 'src/app/services/study-year/study-year.service';
import CourseRealization from 'src/app/models/courseRealization';
import StudyYear from 'src/app/models/studyYear';
import Course from 'src/app/models/course';

@Component({
  selector: 'app-course-realization-add',
  templateUrl: './course-realization-add.component.html',
  styleUrls: ['./course-realization-add.component.css']
})
export class CourseRealizationAddComponent implements OnInit {


  public courseRealizationAdd: FormGroup
  public courseRealization = new CourseRealization();
  private edit = false;
  private id: String;
  public courses: Course[] = [];
  public studyYears: StudyYear[] = [];
  
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private courseService: CourseService, private courseRealizationService: CourseRealizationService, private studyYearService:StudyYearService) { }


  ngOnInit() {
    this.courseRealizationAdd = this.formBuilder.group({
      startDate: ['', {validators: [Validators.required]}],
      endDate: [ '' , {validators: [Validators.required]}],
      course: ['', {validators: [Validators.required]}],
      studyYear: ['', {validators: [Validators.required]}],
      
    });
    if(this.route.snapshot.paramMap.get("id")){
      this.edit = true;
      this.id = this.route.snapshot.paramMap.get("id");
      this.courseRealizationService.getCourseRealizationById(this.id).subscribe((data: CourseRealization) => {
        this.courseRealization = data;
        this.courseRealizationAdd.patchValue(this.courseRealization);
      });
      this.getStudyYear();
      this.getCourses();
    } 
    else {
      this.getStudyYear();
      this.getCourses();
    }
  }

  getCourses() {
    this.courseService.getAllCourses().subscribe((data: Course[]) => {
      this.courses = data;
      console.log(this.courses)
      if(this.edit){
        this.courses.forEach(c => {
          if(JSON.stringify(c) == JSON.stringify(this.courseRealization.course)){
            this.courseRealizationAdd.patchValue({c : c});
          }
        })
      }
   });
  }

  getStudyYear() {
    this.studyYearService.getAll().subscribe((data: StudyYear[]) => {
      this.studyYears = data;
      console.log(this.studyYears)
      if(this.edit){
        this.studyYears.forEach(sy => {
          if(JSON.stringify(sy) == JSON.stringify(this.courseRealization.studyYear)){
            this.courseRealizationAdd.patchValue({sy : sy});
          }
        })
      }
   });
  }

  save(){
    const cr = this.courseRealizationAdd.value;
    this.courseRealization = cr;
    //delete sc['courseImages'];
    console.log(cr)

    if(this.edit){
      this.courseRealizationService.editCourseRealizations(this.id, this.courseRealization).subscribe();
    }else{
      
      this.courseRealizationService.addCourseRealizatons(this.courseRealization).subscribe(_=>{
        this.courseRealizationAdd.reset();
      })
      
    }
    
  }
}
