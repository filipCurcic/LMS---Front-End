import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Course from 'src/app/models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }


}
