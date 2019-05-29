import { Component, OnInit } from '@angular/core';
import { ProfessorsService } from 'src/app/services/professors-service/professors.service';
import { ActivatedRoute } from '@angular/router';
import Professor from 'src/app/models/professor';
@Component({
  selector: 'app-admin-edit-profile',
  templateUrl: './admin-edit-profile.component.html',
  styleUrls: ['./admin-edit-profile.component.css']
})
export class AdminEditProfileComponent implements OnInit {

  constructor(private ProfessorsService : ProfessorsService, private route: ActivatedRoute) { }
  professor:any;
  ngOnInit() {
    this.getProfessor();
  }

  getProfessor() {
    this.professor = this.ProfessorsService.getProfessor(+this.route.snapshot.paramMap.get('id')).subscribe((data: Professor[]) => {
      this.professor = data;
    });
  }

  

  update(id: string, professor: Professor){
    this.ProfessorsService.updateprofessor(id, professor).subscribe((data: any) => {
      this.getProfessor();
    });

}
}
