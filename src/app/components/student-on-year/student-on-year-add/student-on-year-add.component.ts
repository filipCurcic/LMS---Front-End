import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentYearService } from 'src/app/services/student-year/student-year.service';
import { StudyYearService } from 'src/app/services/study-year/study-year.service';
import StudyYear from 'src/app/models/studyYear';
import StudentOnYear from 'src/app/models/studentOnYear';
import { StudentsService } from 'src/app/services/students-service/students.service';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student-on-year-add',
  templateUrl: './student-on-year-add.component.html',
  styleUrls: ['./student-on-year-add.component.css']
})
export class StudentOnYearAddComponent implements OnInit {

  public studentOnYearAdd: FormGroup
  public studentOnYear = new StudentOnYear();
  private studyYear: StudyYear[] = [];
  private students: Student[] = [];
  private edit = false;
  private id: String;
  
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private studentService: StudentsService, private studentOnYearService: StudentYearService, private studyYearService: StudyYearService) { }

  ngOnInit() {

    this.studentOnYearAdd = this.formBuilder.group({
      enrollmentDate: ['', {validators: [Validators.required]}],
      indeks: ['', {validators: [Validators.required]}],
      student: ['', {validators: [Validators.required]}],
      studyYear: ['', {validators: [Validators.required]}],
    });

    if(this.route.snapshot.paramMap.get("id")){
      this.edit = true;
      this.id = this.route.snapshot.paramMap.get("id");
      this.studentOnYearService.getOne(this.id).subscribe((data: StudentOnYear) => {
        this.studentOnYear = data;
        this.studentOnYearAdd.patchValue(this.studentOnYear);
        this.getAllStudyYears();
        this.getAllStudents();
      });
    } 
    else {
      this.getAllStudyYears();
      this.getAllStudents();
    }
  }

  getAllStudyYears() {
    this.studyYearService.getAll().subscribe((data: StudyYear[]) => {
      this.studyYear = data;
      console.log(this.studyYear)
      if(this.edit){
        this.studyYear.forEach(sy => {
          if(JSON.stringify(sy) == JSON.stringify(this.studentOnYear.studyYear)){
            this.studentOnYearAdd.patchValue({sy : sy});
          }
        })
      }
   });
  }

  getAllStudents() {
    this.studentService.getStudents().subscribe((data: Student[]) => {
      this.students = data;
      console.log(this.students)
      if(this.edit){
        this.students.forEach(student => {
          if(JSON.stringify(student) == JSON.stringify(this.studentOnYear.student)){
            this.studentOnYearAdd.patchValue({student : student});
          }
        })
      }
   });
  }


  save(){
    const soy = this.studentOnYearAdd.value;
    this.studentOnYear = soy;
    //delete sc['courseImages'];
    console.log(soy)

    if(this.edit){
      this.studentOnYearService.edit(this.id, this.studentOnYear).subscribe();
    }else{
      
      this.studentOnYearService.addStudentOnYear(this.studentOnYear).subscribe(_=>{
        this.studentOnYearAdd.reset();
        this.studyYear = [];
      })
      
    }
    
  }

}
