import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import Student from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  student:Student;

  constructor() { }
}
