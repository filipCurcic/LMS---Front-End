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
import { CoursesComponent } from './components/courses/courses.component';
import { UsersComponent } from './components/users/users.component';
import { CourseRegistrationComponent } from './components/course-registration/course-registration.component';
import { AdminProfessorProfileOverviewComponent } from './components/admin-professor-profile-overview/admin-professor-profile-overview.component';
import { AdminStudentProfileOverviewComponent } from './components/admin-student-profile-overview/admin-student-profile-overview.component';
const routes: Routes = [
  { path: '', redirectTo: '/admin_panel', pathMatch: 'full' },
  {path: 'admin_panel/students', component:StudentsComponent},
  {path:'admin_panel/professors', component:ProfessorsComponent},
  {path:'admin_panel/courses', component:CoursesComponent},
  {path:'admin_panel/users', component:UsersComponent},
  {path:'newCourse', component:CourseRegistrationComponent},
  {path:'professor/:id', component:ProfessorProfileComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'admin_tables', component:AdminComponent},
  {path:'admin_panel', component:AdminPanelComponent},
  {path:'admin_panel/professors/:id', component:AdminProfessorProfileOverviewComponent},
  {path:'admin_panel/students/:id', component:AdminStudentProfileOverviewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
