import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import {ProfessorsComponent} from './components/professors/professors.component';
import {StudentsComponent} from './components/students/students.component';
import { ProfessorProfileComponent } from './components/professor-profile/professor-profile.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import {RegisterComponent} from './components/register/register.component'
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CalendarMainComponent } from './components/calendar-main/calendar-main.component';
import { DayComponent } from './components/day/day.component';
import {ExamsComponent} from './components/exams/exams.component'

const routes: Routes = [
  { path: '', redirectTo: '/admin_panel', pathMatch: 'full' },
  {path: 'students', component:StudentsComponent},
  {path:'professors', component:ProfessorsComponent},
  {path:'professor/:id', component:ProfessorProfileComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'admin_tables', component:AdminComponent},
  {path:'admin_panel', component:AdminPanelComponent},
  {path:'calendar', component:CalendarMainComponent},
  {path:'day', component:DayComponent},
  {path:'exams', component:ExamsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
