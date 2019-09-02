import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfessorsService } from 'src/app/services/professors-service/professors.service';
import { ProfessrorOnRealizationService } from 'src/app/services/professors-service/professror-on-realization.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import TeacherOnRealization from 'src/app/models/teacherOnRealization';
import Professor from 'src/app/models/professor';
import { CourseRealizationService } from 'src/app/services/course-service/course-realization.service';
import CourseRealization from 'src/app/models/courseRealization';

@Component({
  selector: 'app-professor-on-realization-add',
  templateUrl: './professor-on-realization-add.component.html',
  styleUrls: ['./professor-on-realization-add.component.css']
})
export class ProfessorOnRealizationAddComponent implements OnInit {

  public professorOnRealizationAdd: FormGroup
  public professorOnRealization = new TeacherOnRealization();
  public professors: Professor[] = [];
  public courseRealizations: CourseRealization[] = [];
  private edit = false;
  private id: String;
  
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private professorService: ProfessorsService, private professorOnRealizationService: ProfessrorOnRealizationService,private courseRealizationService: CourseRealizationService) { }

  ngOnInit() {
    this.professorOnRealizationAdd = this.formBuilder.group({
      numberOfClasses: ['', {validators: [Validators.required]}],
      teacher: ['', {validators: [Validators.required]}],
      courseRealization: [ '' , {validators: [Validators.required]}],
    });

    if(this.route.snapshot.paramMap.get("id")){
      this.edit = true;
      this.id = this.route.snapshot.paramMap.get("id");
      this.professorOnRealizationService.getProfessorOnRealizationById(this.id).subscribe((data: TeacherOnRealization) => {
        this.professorOnRealization = data;
        this.professorOnRealizationAdd.patchValue(this.professorOnRealization);
      });
      this.getProfessors();
      this.getCourseRealizations();
    } 
    else {
      this.getProfessors();
      this.getCourseRealizations();
    }
  
  }

  getProfessors(){
    this.professorService.getProfessors().subscribe((data: Professor[]) => {
      this.professors = data;
      console.log(this.professors);
       if(this.edit){
         this.professors.forEach(teacher => {
           if(JSON.stringify(teacher) == JSON.stringify(this.professorOnRealization.teacher)){
             this.professorOnRealizationAdd.patchValue({teacher : teacher});
           }
         })
       }
    });
  }

  getCourseRealizations() {
    this.courseRealizationService.getAllCourseRealizations().subscribe((data: CourseRealization[]) => {
      this.courseRealizations = data;
      console.log(this.courseRealizations);
      if(this.edit) {
        this.courseRealizations.forEach(cr => {
          if(JSON.stringify(cr) == JSON.stringify(this.professorOnRealization.courseRealization)){
            this.professorOnRealizationAdd.patchValue({cr : cr});
          }
        })
      }
    });
  }

  add(){
    const por = this.professorOnRealizationAdd.value;
    this.professorOnRealization = por;
    console.log(por)

    if(this.edit){
      this.professorOnRealizationService.editProfessorOnRealization(this.id, this.professorOnRealization).subscribe();
    }else{
      this.professorOnRealizationService.addProfessorsOnRealization(this.professorOnRealization).subscribe(_=>{
        this.professorOnRealizationAdd.reset();
        this.professors = [];
        this.courseRealizations = [];
      })
      
    }
    
  }


  }
