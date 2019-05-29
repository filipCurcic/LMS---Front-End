import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { GeneratedFile } from '@angular/compiler';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../../services/data.service';
import { CalendarServiceService } from '../../services/calendar-service/calendar-service.service';
import { Day } from '../../models/day';
import { Event } from '../../models/event';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-calendar-main',
  templateUrl: './calendar-main.component.html',
  styleUrls: ['./calendar-main.component.css']
})
export class CalendarMainComponent implements OnInit {

  todayValue = false;
  date = moment(); // today
  daysArray; // all days
  month; // current month
  // monthNumber = moment().format('M');
  // yearNumber = moment().format('YYYY');
  monthNumber;
  yearNumber;
  eventNumber;
  events: Event[] = [];
  eventsCount: any[] = [];
  dayObjects: Day[] = [];

  constructor(private dataService: DataService, private dataEvents: CalendarServiceService) { }

  ngOnInit() {
    this.daysArray = this.createCalendar(this.date, this.date.month()+1, this.date.year());
  }

  // Events for active month
  getEventsCount(month: Number, year: Number){
    this.dataEvents.getEventsCount(month, year).subscribe((data) => {
      this.eventsCount = data;
      this.eventNumber = this.eventsCount.length;
      this.convertToEvent();
      this.createEventsBadges();
    })
  }
  
  convertToEvent(){
    this.events = [];
    this.eventsCount.forEach(element => {
      let e = new Event(moment(element.dateEvent).format(), element.header, element.type, element.info);
      this.events.push(e);
    });
  }


  createEventsBadges(){
    this.dayObjects = [];
    let counter = 0;

    for (const day of this.daysArray) {
      if (day != null) {
        for (const event of this.events) {
          if (day.isSame(event.date)) {
            counter += 1;
          }
        }
        let d = new Day(day, counter);
        this.dayObjects.push(d);
        counter = 0;
      } else {
        let b = new Day(day, counter);
        this.dayObjects.push(b);
      }
      
        
    }
  }

  // Calendar creator
  createCalendar(month, newMonth: Number, newYear: Number) {
    let firstDay = moment(month).startOf("M");
    let lastDay = moment(month).endOf("M");
    // data for eventCount
    this.monthNumber = moment().format('M');
    this.yearNumber = moment().format('YYYY');
    // console.log(newMonth);
    // console.log(newYear);
    this.getEventsCount(newMonth, newYear);

    let days = Array.apply(null, {length: month.daysInMonth()})
      .map(Number.call, Number)
      .map((n)=>{
        return moment(firstDay).add(n, 'd');
      })    
    
    for(let n=0; n < firstDay.weekday(); n++){  
      days.unshift(null);
    }

    while(days.length < 35 || days.length > 35 && days.length < 42){
      days.push(null);
    }

    return days;
  }


  prevMonth(){
    this.date.subtract(1,'M');
    this.daysArray = this.createCalendar(this.date, this.date.month()+1, this.date.year());
  }

  nextMonth(){
    this.date.add(1, 'M');
    this.daysArray = this.createCalendar(this.date, this.date.month()+1, this.date.year());
  }

  clicked(date: moment.Moment){
    this.dataService.changeMessage(date);
  }




}

