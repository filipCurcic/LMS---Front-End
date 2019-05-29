import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { Day } from '../../models/day';
import { DataService } from '../../services/data.service';
import { Event } from '../../models/event';
import { CalendarServiceService } from '../../services/calendar-service/calendar-service.service';
import { EventSend } from '../../models/EventSend';
import { CalendarMainComponent } from '../calendar-main/calendar-main.component';


@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})

export class DayComponent implements OnInit {

  @Input() day: Day;
  clicked: moment.Moment;
  event: Event;
  listOfEvents = [];

  addEvent: Event = {
    'date':this.clicked,
    'header':'',
    'info':'',
    'type':''

  }

  constructor(private data: DataService, private dataEvents: CalendarServiceService, private calendar: CalendarMainComponent) { }

  ngOnInit() {
    // Subscribed on Calendar Component
    this.data.currentMessage.subscribe(message => {
      this.clicked = message;
      this.getCurrentEvents(this.clicked);
    });
  }

  // Get Events for Clicked Day
  getCurrentEvents(date: moment.Moment){
    this.listOfEvents = [];
    this.dataEvents.getCurrentEvents(date.date(), date.month()+1, date.year()).subscribe((data) => {
      this.listOfEvents = data;
      console.log(this.listOfEvents);
      this.converter(this.listOfEvents);
    })
  }

  converter(list){
    this.listOfEvents = [];
    list.forEach(element => {
      let ev = new Event(moment(element.dateEvent), element.header, element.type, element.info);
      this.listOfEvents.push(ev);
    });
  }



  newEvent(){  // FORMAT ?
    let e = new EventSend(this.clicked.format("YYYY-MM-DD"), this.addEvent.header, this.addEvent.type, this.addEvent.info);
    console.log(e);
    this.dataEvents.addNewEvent(e).subscribe(() => {
      this.ngOnInit();
      this.calendar.ngOnInit();
    })
  }
  


}
