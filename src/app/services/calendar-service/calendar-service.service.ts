import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventSend } from './../../models/EventSend';


@Injectable({
  providedIn: 'root'
})
export class CalendarServiceService {

  events:Event[] = [];

  constructor(private http: HttpClient) { }

  getEvents(){
    return this.http.get<Event[]>(`http://localhost:8080/calendar/all`);
  }

  getEventsCount(month: Number, year: Number){
    return this.http.get<Event[]>(`http://localhost:8080/calendar/eventCount/${month}/${year}`);
  }

  getCurrentEvents(day: Number, month: Number, year: Number){
    return this.http.get<Event[]>(`http://localhost:8080/calendar/eventCount/${day}/${month}/${year}`);
  }

  addNewEvent(event: EventSend){
    return this.http.post(`http://localhost:8080/calendar/addEvent`, event);
  }


}
