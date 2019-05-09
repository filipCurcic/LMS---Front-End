import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import {ProfessorsComponent} from './components/professors/professors.component';
import {StudentsComponent} from './components/students/students.component';
<<<<<<< HEAD
import { ProfessorProfileComponent } from './components/professor-profile/professor-profile.component';
=======
import {LoginComponent} from './components/login/login.component'
>>>>>>> 4fb4942088a21e201547154343f619d932180993
const routes: Routes = [
  { path: '', redirectTo: '/professors', pathMatch: 'full' },
  {path: 'students', component:StudentsComponent},
  {path:'professors', component:ProfessorsComponent},
<<<<<<< HEAD
  {path:'professor/:id', component:ProfessorProfileComponent}
=======
  {path:'login', component:LoginComponent}
>>>>>>> 4fb4942088a21e201547154343f619d932180993
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
