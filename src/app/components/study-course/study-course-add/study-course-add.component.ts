import { Component, OnInit } from '@angular/core';
import StudyCourse from 'src/app/models/studyCourse';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudyCourseService } from 'src/app/services/study-course-service/study-course.service';
import { FromErrorsService } from 'src/app/services/formErrors/from-errors.service';
import { Observable, Observer } from 'rxjs';
import Faculty from 'src/app/models/faculty';
import { FacultyService } from 'src/app/services/faculty-service/faculty.service';

@Component({
  selector: 'app-study-course-add',
  templateUrl: './study-course-add.component.html',
  styleUrls: ['./study-course-add.component.css']
})
export class StudyCourseAddComponent implements OnInit {

  
  public studyCourseAdd : FormGroup;
  private edit = false;
  private id : string;
  public studyCourse = new StudyCourse();
  public faculties: Faculty[] = []; 
  imagePreview: string;
  
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private studyCourseService: StudyCourseService, public formError: FromErrorsService, private facultyService: FacultyService) {
    
   }

  ngOnInit() {
    this.studyCourseAdd = this.formBuilder.group({
      name: ['', {validators: [Validators.required]}],
      faculty: ['', {validators: [Validators.required]}],
      imgPath: ['', {validators: [Validators.required]}],
      courseImages: new FormControl(['', {asyncValidators: [this.mimeTypeValidator]}])
    });

    if(this.route.snapshot.paramMap.get("id")){
      this.edit = true;
      this.id = this.route.snapshot.paramMap.get("id");
      this.studyCourseService.getOneStudyCourse(this.id).subscribe((data: StudyCourse) => {
        this.studyCourse = data;
        this.studyCourseAdd.patchValue(this.studyCourse);
        this.getFaculties();
      });
    } 
    else {
      this.getFaculties();
      
    }
  }

  getFaculties(){
    this.facultyService.getAllFaculties().subscribe((data: Faculty[]) => {
      this.faculties = data;
      console.log(this.faculties);
       if(this.edit){
         this.faculties.forEach(faculty => {
           if(JSON.stringify(faculty) == JSON.stringify(this.studyCourse.faculty)){
             this.studyCourseAdd.patchValue({faculty : faculty});
           }
         })
       }
    });
  }

  add(){
      const sc = this.studyCourseAdd.value;
      this.studyCourse = sc;
      delete sc['courseImages'];
      console.log(sc)

      if(this.edit){
        this.studyCourseService.updateStudyCourse(this.id, this.studyCourse, this.studyCourseAdd.get('courseImages').value).subscribe();
      }else{
        this.studyCourseService.addStudyCourse(this.studyCourse, this.studyCourseAdd.get('courseImages').value).subscribe(_=>{
          this.studyCourseAdd.reset();
          this.faculties = [];
        })
        
      }
      
    }
  
  

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    if(file){
      this.studyCourseAdd.patchValue({ courseImages: file });
      this.studyCourseAdd.get("courseImages").updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;;
      };
      reader.readAsDataURL(file);
    }
  }


  
  mimeTypeValidator = (control: AbstractControl): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> => {
    const file = control.value as File;
    const fileReader = new FileReader();
    const frObs = Observable.create(
        (observer: Observer<{ [key: string]: any }>) => {
            fileReader.addEventListener("loadend", () => {
                const arr = new Uint8Array(fileReader.result as ArrayBuffer).subarray(0, 4);
                let header = "";
                let isValid = false;
                for (let i = 0; i < arr.length; i++) {
                    header += arr[i].toString(16);
                }
                switch (header) {
                    case "89504e47":
                        isValid = true;
                        break;
                    case "ffd8ffe0":
                    case "ffd8ffe1":
                    case "ffd8ffe2":
                    case "ffd8ffe3":
                    case "ffd8ffe8":
                        isValid = true;
                        break;
                    default:
                        isValid = false;
                        break;
                }
                if (isValid) {
                    observer.next(null);
                } else {
                    observer.next({ invalidMimeType: true });
                }
                observer.complete();
            });
            if (file) {
                fileReader.readAsArrayBuffer(file);
            }else{
                observer.next(null);
                observer.complete();
            }
        }
    );
    return frObs;
  }

}

