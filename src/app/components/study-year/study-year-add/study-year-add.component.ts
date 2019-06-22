import { Component, OnInit } from '@angular/core';
import { StudyYearService } from 'src/app/services/study-year/study-year.service';
import { StudyCourseService } from 'src/app/services/study-course-service/study-course.service';
import StudyCourse from 'src/app/models/studyCourse';
import StudyYear from 'src/app/models/studyYear';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-study-year-add',
  templateUrl: './study-year-add.component.html',
  styleUrls: ['./study-year-add.component.css']
})
export class StudyYearAddComponent implements OnInit {

  public studyYearAdd: FormGroup
  public studyYear = new StudyYear();
  private studyCourses: StudyCourse[] = [];
  public year: number[] = [1,2,3,4]
  private edit = false;
  private id: String;
  
  
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private studyYearService: StudyYearService, private studyCourseService: StudyCourseService) { }

  ngOnInit() {

    this.studyYearAdd = this.formBuilder.group({
      startDate: ['', {validators: [Validators.required]}],
      endDate: ['', {validators: [Validators.required]}],
      studyYear: ['', {validators: [Validators.required]}],
      studyCourse: ['', {validators: [Validators.required]}],
    });
   
    if(this.route.snapshot.paramMap.get("id")){
      this.edit = true;
      this.id = this.route.snapshot.paramMap.get("id");
      this.studyYearService.getOne(this.id).subscribe((data: StudyYear) => {
        this.studyYear = data;
        this.studyYearAdd.patchValue(this.studyYear);
        this.getAllStudyCourses();
      });
    } 
    else {
      this.getAllStudyCourses();
      
    }

  }


  getAllStudyCourses() {
    this.studyCourseService.getAllStudyCourses().subscribe((data: StudyCourse[]) => {
      this.studyCourses = data;
      console.log(this.studyCourses)
      if(this.edit){
        this.studyCourses.forEach(studyCourse => {
          if(JSON.stringify(studyCourse) == JSON.stringify(this.studyYear.studyCourse)){
            this.studyYearAdd.patchValue({studyCourse : studyCourse});
          }
        })
      }
   });
  }

  add(){
    const sy = this.studyYearAdd.value;
    this.studyYear = sy;
    //delete sc['courseImages'];
    console.log(sy)

    if(this.edit){
      this.studyYearService.edit(this.id, this.studyYear).subscribe();
    }else{
      
      this.studyYearService.add(this.studyYear).subscribe(_=>{
        this.studyYearAdd.reset();
        this.studyCourses = [];
      })
      
    }
    
  }

}
