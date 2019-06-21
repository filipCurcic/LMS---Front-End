import { Component, OnInit } from '@angular/core';
import { ProfessorsService } from 'src/app/services/professors-service/professors.service';
import { ActivatedRoute } from '@angular/router';
import Professor from 'src/app/models/professor';
import { UsersService } from 'src/app/services/users-service/users.service';
import { UniversityService } from 'src/app/services/university-service/university.service';
import { FacultyService } from 'src/app/services/faculty-service/faculty.service';
import EditTeacherDto from 'src/app/models/EditTeacherDto';
@Component({
  selector: 'app-admin-edit-profile',
  templateUrl: './admin-edit-profile.component.html',
  styleUrls: ['./admin-edit-profile.component.css']
})
export class AdminEditProfileComponent implements OnInit {

  constructor(private professorService : ProfessorsService, private userService : UsersService, 
                private universityService : UniversityService, private facultyService : FacultyService,
                private route: ActivatedRoute) { }
  professor:any;

  ngOnInit() {
    this.getProfessor();
  }

  getProfessor() {
    this.professor = this.professorService.getProfessor(+this.route.snapshot.paramMap.get('id')).subscribe((data: Professor[]) => {
      this.professor = data;
    });
  }

  

  update(id: string, professor: Professor){
    let teacher:EditTeacherDto = new EditTeacherDto();
    teacher.setAttributes(professor, professor.user);
    alert(teacher.professor.name)
    alert(teacher.user.username);
    this.professorService.updateprofessor(id, professor).subscribe((data: any) => {
      this.getProfessor();
    });
    
  
    
  }
}
