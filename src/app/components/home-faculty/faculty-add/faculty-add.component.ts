import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Observable, Observer } from "rxjs";
import { ActivatedRoute } from '@angular/router';
import { FacultyService } from 'src/app/services/faculty-service/faculty.service';
import Faculty from 'src/app/models/faculty';
import University from 'src/app/models/university';
import Address from 'src/app/models/address';
import { UniversityService } from 'src/app/services/university-service/university.service';

@Component({
  selector: 'app-faculty-add',
  templateUrl: './faculty-add.component.html',
  styleUrls: ['./faculty-add.component.css']
})
export class FacultyAddComponent implements OnInit {

  public facultyAdd : FormGroup;
  public faculty = new Faculty();
  public faculties: Faculty[] = []; 
  public universities: University[] = [];
  private edit = false;
  private id : string;
  private uni : University;
  
  constructor(private route: ActivatedRoute, private facultyService: FacultyService, private formBuilder: FormBuilder, private universityService: UniversityService) { }

  ngOnInit() {
    this.facultyAdd = this.formBuilder.group({
      name: ['', {validators: [Validators.required]}],
      contact: ['', {validators: [Validators.required]}],
      email: ['', {validators: [Validators.required, Validators.email]}],
      description: ['', {validators: [Validators.required]}],
      // university: this.formBuilder.group({
      //         id:[ , {validators: [Validators.required]}],
      // }),
      // address: this.formBuilder.group({ 
      //       street: ['', {validators: [Validators.required]}],
      // })
    });

    if(this.route.snapshot.paramMap.get("id")){
      this.edit = true;
      this.id = this.route.snapshot.paramMap.get("id");
      this.facultyService.getFaculty(this.id).subscribe((data: Faculty) => {
        this.faculty = data;
        this.facultyAdd.patchValue(this.faculty);
        this.getUniversity();
      });
    } 
    else {
      this.getUniversity();
      
    }


  }

   getUniversity() {
     this.universityService.getUniversities().subscribe(data => {
       this.universities = data;
       console.log(this.universities);
       if(this.edit){
         this.universities.forEach(university => {
           if(JSON.stringify(university) == JSON.stringify(this.faculty.university)){
             this.facultyAdd.patchValue({university : university});
           }
        })
      }
    });
  }


  add(){
    const fac = this.facultyAdd.value;
    this.faculty = fac;
    console.log(fac)
    
    if(this.edit){
      this.facultyService.editFaculty(this.id, this.faculty).subscribe();
    }else{
      this.facultyService.addFaculty(this.faculty).subscribe(_=>{
        this.facultyAdd.reset();
        //this.faculties = [];
      })
      
    }
    
  }


}
