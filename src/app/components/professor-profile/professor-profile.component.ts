import { Component, OnInit } from '@angular/core';
import { ProfessorsService } from 'src/app/services/professors-service/professors.service';
import { ActivatedRoute } from '@angular/router';
import Professor from 'src/app/models/professor';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-professor-profile',
  templateUrl: './professor-profile.component.html',
  styleUrls: ['./professor-profile.component.css']
})
export class ProfessorProfileComponent implements OnInit {

  constructor(private ProfessorsService : ProfessorsService
    ,private route: ActivatedRoute) { }

    professor:any;
    dragged:boolean;

    ngOnInit() {
      this.professor = this.ProfessorsService.getProfessor(+this.route.snapshot.paramMap.get('id')).subscribe((data: Professor[]) => {
        this.professor = data;
      });
    }

    todo = [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ];
  
    done = [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ];

    saveChanges():void {
      this.dragged = false;
    }
  
    drop(event: CdkDragDrop<string[]>) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);
      }

      this.dragged = true;
    }

}
