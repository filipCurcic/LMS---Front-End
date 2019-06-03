import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import Professor from '../../models/professor';
import { ProfessorsService } from 'src/app/services/professors-service/professors.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})
export class ProfessorsComponent implements OnInit {

  constructor(private ProfessorsService:ProfessorsService) { }

  dataSource = new ProfessorsDataSource(this.ProfessorsService);
  

  ngOnInit() {
  }

  displayedColumns = ['id', 'name', 'email', 'phone', 'actionsEdit', 'actionsDelete'];

  

}
export class ProfessorsDataSource extends DataSource<any> {
    constructor(private ProfessorsService: ProfessorsService) {
      super();
    }

    
    connect(): Observable<Professor[]> {
      return this.ProfessorsService.getProfessors();
    }

    disconnect() {

    }
}