import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfessorsService } from 'src/app/services/professors-service/professors.service';
import Professor from 'src/app/models/professor';
@Component({
  selector: 'app-admin-professor-profile-overview',
  templateUrl: './admin-professor-profile-overview.component.html',
  styleUrls: ['./admin-professor-profile-overview.component.css']
})
export class AdminProfessorProfileOverviewComponent implements OnInit {

  constructor(private ProfessorsService : ProfessorsService, private route: ActivatedRoute) { 
    
  }
  professor:any;
  
  ngOnInit() {
    this.professor = this.ProfessorsService.getProfessor(+this.route.snapshot.paramMap.get('id')).subscribe((data: Professor[]) => {
      this.professor = data;
    });
  }

  

}
