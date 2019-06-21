import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study-history',
  templateUrl: './study-history.component.html',
  styleUrls: ['./study-history.component.css']
})
export class StudyHistoryComponent implements OnInit {

  public listOfExams = [
    {
      "name":"OOP1",
      "ECTS":"7",
      "grade":"9"
    },
    {
      "name":"OOP2",
      "ECTS":"7",
      "grade":"9"
    },
    {
      "name":"OOP3",
      "ECTS":"7",
      "grade":"9"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
