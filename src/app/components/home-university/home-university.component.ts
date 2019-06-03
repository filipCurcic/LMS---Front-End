import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/app/services/university-service/university.service';
import University from 'src/app/models/university';

@Component({
  selector: 'app-home-university',
  templateUrl: './home-university.component.html',
  styleUrls: ['./home-university.component.css']
})

export class HomeUniversityComponent implements OnInit {

  private university: University;
  private faculties;

  constructor(private uniService: UniversityService) { }

  ngOnInit() {
    this.getUniversity('1');
  }


  getUniversity(id: string){
    this.uniService.getUniversity(id).subscribe((data) => {
      this.university = data;
      this.getFacultiesOnUni(this.university.id)
    })
  }

  getFacultiesOnUni(id: number){
    this.uniService.getFacultiesOnUni(id).subscribe((data) => {
      this.faculties = data;
      console.log(this.faculties);
    })
  }


  selectFaculty(faculty: string) {
    console.log(faculty);
  }

}
