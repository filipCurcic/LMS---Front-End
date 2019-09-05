import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Observable, Observer } from "rxjs";
import { ActivatedRoute } from '@angular/router';
import { FromErrorsService } from '../../../services/formErrors/from-errors.service'
import News from 'src/app/models/news';
import { NewsService } from 'src/app/services/news-service/news.service';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.css']
})
export class NewsAddComponent implements OnInit {
  @Input() public parrentForm: FormGroup;
  public administratorStaffDataForm : FormGroup;
  imagePreview: string;

  private edit = false;
  public news : News
  public form : FormGroup;

  constructor(private route: ActivatedRoute, private newsService: NewsService, public formError: FromErrorsService) { }

  ngOnInit() {
    this.form = new FormGroup({
      headline: new FormControl(''),
      body: new FormControl(''),
      name: new FormControl(''),
      profilePicturePath: new FormControl('assets/img/news3.jpg')
 
      //profileImage: new FormControl(['', {asyncValidators: [this.mimeTypeValidator]}])
    });
}


addNews(){
  if(this.form.invalid){
    this.formError.markFormGroupTouched(this.form);
  }else{
    const prof = this.form.value;


      this.news = prof;


      console.log(prof)
      this.newsService.addNews(prof).subscribe();
      this.form.reset();
    
  }
}


  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    if(file){
      this.form.patchValue({ profileImage: file });
      this.form.get("profileImage").updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;;
      };
      reader.readAsDataURL(file);
    }
  }

  
  markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
        control.markAsTouched();
        if (control.controls) {
            this.markFormGroupTouched(control);
        }
    });
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
