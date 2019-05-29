import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Exam from 'src/app/models/Exam'
import {DataSource} from '@angular/cdk/collections';
import { ExamsService } from 'src/app/services/exams-service/exams.service';


@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {

  exams: Exam[];
 
  sum:number = 0;
  n:number=0;
  average:number;

  constructor(private ExamsService:ExamsService) {
  
  }

  dataSource = new ExamsDataSource(this.ExamsService);

  displayedColumns = ['id', 'name','startTime', 'endTime', 'duration', 'points', 'grade', 'examTerm', 'actionsSubmit'];

  ngOnInit() {
    this.ExamsService.getExams().subscribe(exams => this.exams = exams);
    
  }

  getAverage():number{
    for (let exam of this.exams) {
      this.sum = this.sum + exam.grade
      this.n++
    }
    this.average =this.sum/this.n
    return this.average
  }
}

export class ExamsDataSource extends DataSource<any> {
  constructor(private ExamsService: ExamsService) {
    super();
  }

  connect(): Observable<Exam[]> {
    return this.ExamsService.getExams();
  }
  
  disconnect() {

  }

}
