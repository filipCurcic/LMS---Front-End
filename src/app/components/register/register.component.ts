import { Component, OnInit,  EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl  } from '@angular/forms';
import { StudentsService } from 'src/app/services/students-service/students.service';
import { ProfessorsService } from 'src/app/services/professors-service/professors.service';
import Student from 'src/app/models/student';
import Professor from 'src/app/models/professor';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
 
  students: Student[];
  professors: Professor[];
  sYear:string;
  titleList: string[] = ['Master', 'Doctor'];

  StudentId:number;
  StudentName:string;
  StudentJmbg:string;
  StudentStreet:string;
  StudentNumber:string;
  StudentCity:string;
  StudentSYear:string;
  university:string;
  faculty:string;
  professorId:number;
  professorName:string;
  professorJmbg:string;
  professorBio:string;
  professorStreet:string;
  professorNumber:string;
  professorCity:string;
  professorTitle:string;
  professorTitleType:string;
  


  

  constructor(private _formBuilder: FormBuilder, private StudentsService:StudentsService, private ProfessorsService:ProfessorsService) { 
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      pnameCtrl: ['', Validators.required],
      pjmbgCtrl: ['', Validators.required],
      bioCtrl: ['', Validators.required],
      titleCtrl: ['', Validators.required],
      titleTypeCtrl: ['', Validators.required],
      universityCtrl: ['', Validators.required],
      facultyCtrl: ['', Validators.required],
      pstreetCtrl: ['', Validators.required],
      pnumberCtrl: ['', Validators.required],
      pcityCtrl: ['', Validators.required]

    });
    
    
    this.secondFormGroup = this._formBuilder.group({
      snameCtrl: ['', Validators.required],
      sjmbgCtrl: ['', Validators.required],
      sstreetCtrl: ['', Validators.required],
      snumberCtrl: ['', Validators.required],
      scityCtrl: ['', Validators.required],
      sYearCtrl: ['', Validators.required]

    });
   
  }

  // onSubmitStudent(form: NgForm){

  //   if (form.invalid) {
  //     return;
  //   }

  //   const student = {
  //     id:this.StudentId,
  //     name:this.StudentName,
  //     jmbg:this.StudentJmbg,
  //     address:this.StudentStreet + " " + this.StudentNumber + ", " + this.StudentCity,
  //     studentYears:this.StudentSYear
     
  //   }

  //   this.StudentsService.addStudent(student).subscribe(student => {
  //     this.students});

  //     this.StudentName = ''
  //     this.StudentJmbg='';
  //     this.StudentStreet='';
  //     this.StudentNumber='';
  //     this.StudentCity='';
  //     this.StudentSYear='';
    
  // }




  // onSubmitProfessor(form1: NgForm){

  //   if (form1.invalid) {
  //     return;
  //   }

  //   const professor = {
  //     id:this.professorId,
  //     name:this.professorName,
  //     jmbg:this.professorJmbg,
  //     bio:this.professorBio,
  //     address:this.professorStreet + " " + this.professorNumber + ", " + this.professorCity,
  //     university:this.university,
  //     title:this.professorTitle,
  //     faculty:this.faculty
     
  //   }

  //   console.log("register")
  //   this.ProfessorsService.addProfessor(professor).subscribe(professor => {
  //     this.professors});

  //     this.professorName = ''
  //     this.professorJmbg='';
  //     this.professorBio='';
  //     this.professorStreet='';
  //     this.professorNumber='';
  //     this.professorCity='';
  //     this.university='';
  //     this.faculty='';
  //     this.professorTitle='';
    
  // }

}
