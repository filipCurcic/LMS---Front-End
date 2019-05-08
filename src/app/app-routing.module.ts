import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import {ProfessorsComponent} from './components/professors/professors.component';
import {StudentsComponent} from './components/students/students.component';
const routes: Routes = [
  { path: '', redirectTo: '/professors', pathMatch: 'full' },
  {path: 'students', component:StudentsComponent},
  {path:'professors', component:ProfessorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
