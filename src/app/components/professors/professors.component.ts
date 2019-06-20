import { Component, OnInit, ViewChild } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import Professor from '../../models/professor';
import { ProfessorsService } from 'src/app/services/professors-service/professors.service';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})
export class ProfessorsComponent implements OnInit {

  professors : Professor[] = [];
  professor : Professor = new Professor();
  displayedColumns: string[] = ['id', 'name', 'lastName', 'jmbg', 'registeredUser.username',  'actionsEdit', 'actionsDelete'];
  dataSource = new MatTableDataSource<Professor>(this.professors);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(private professorService: ProfessorsService) {}

  ngOnInit() {
    // this.dataSource.sortingDataAccessor = (item, property) => {
    //   if (property.includes('.')) return property.split('.').reduce((o,i)=>o[i], item)
    //     return item[property];
    // };
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getAll();
    
  }

  getAll(){
    this.professorService.getProfessors().subscribe((data: Professor[]) => {
      this.professors = data;
      this.dataSource.data = data;
    });
  }

  delete(id: string){
    this.professorService.deleteProfessor(id).subscribe((data: any) => {
      this.getAll();
    });
  }

  update(id: string, professor: Professor, image: File){
    this.professorService.updateProfessor(id, professor, image).subscribe((data: any) => {
      this.getAll();
    });
  }
}