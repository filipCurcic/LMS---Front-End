import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Student } from '../models/student';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private messageSource = new BehaviorSubject<moment.Moment>(moment());
  currentMessage = this.messageSource.asObservable();

  constructor(){}

  changeMessage(date: moment.Moment){
      this.messageSource.next(date);
  }



}
