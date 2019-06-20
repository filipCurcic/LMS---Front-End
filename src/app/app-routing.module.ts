import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { ProfessorsComponent } from './components/professors/professors.component';
import { StudentsComponent } from './components/students/students.component';
import { ProfessorProfileComponent } from './components/professor-profile/professor-profile.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { RegisterComponent } from './components/register/register.component'
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { CalendarMainComponent } from './components/calendar-main/calendar-main.component';
import { DayComponent } from './components/day/day.component';
import { AddressComponent } from './components/address/address.component'
import { HomeUniversityComponent } from './components/home-university/home-university.component';
import { HomeFacultyComponent } from './components/home-faculty/home-faculty.component';
import { OsmComponent } from './components/osm/osm.component';
import { RoleGuard } from './authorization/role.guard';
import { StudentAddComponent } from './components/students/student-add/student-add.component';
import { AdministratorStaffAddComponent } from './components/administrator-staff/administrator-staff-add/administrator-staff-add.component';
import { ProfessorAddComponent } from './components/professors/professor-add/professor-add.component';
import { StudyCourseComponent } from './components/study-course/study-course.component';
import { StudyCourseAddComponent } from './components/study-course/study-course-add/study-course-add.component';
import { FacultyAddComponent } from './components/home-faculty/faculty-add/faculty-add.component';

const routes: Routes = [
  {path: 'students', component:StudentsComponent},
  {path:'professors', component:ProfessorsComponent},
  {path:'professor/:id', component:ProfessorProfileComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'admin_tables', component:AdminComponent},
  {path:'admin_panel', component:AdminPanelComponent,
         canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_ADMINISTRATOR', 'ROLE_ADMINISTRATIVE_STAFF']}},
  {path:'calendar', component:CalendarMainComponent,  canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_STUDENT']}},
  {path:'uniHome', component:HomeUniversityComponent},
  {path:'facHome/:id', component:HomeFacultyComponent},
  {path:'map', component:OsmComponent},
  {path:'day', component:DayComponent},
  {path:'address', component:AddressComponent},
  { path: 'edit/student/:username', component: StudentAddComponent, 
      canActivate: [RoleGuard], data: {expectedRoles: ['ROLE_ADMINISTRATOR', 'ROLE_ADMINISTRATIVE_STAFF']}},
  {path: 'register-student', component: StudentAddComponent, 
      canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_ADMINISTRATOR', 'ROLE_ADMINISTRATIVE_STAFF']}},
  {path: 'register-administrator-staff', component: AdministratorStaffAddComponent, 
      canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_ADMINISTRATOR']}},
  { path: 'edit/professor/:username', component: ProfessorAddComponent, 
      canActivate: [RoleGuard], data: {expectedRoles: ['ROLE_ADMINISTRATOR', 'ROLE_ADMINISTRATIVE_STAFF']}},
  {path: 'register-professor', component: ProfessorAddComponent, 
      canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_ADMINISTRATOR', 'ROLE_ADMINISTRATIVE_STAFF']}},
  {path: 'add-study-course', component: StudyCourseAddComponent, 
      canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_ADMINISTRATOR']}},
  {path: 'add-faculty', component: FacultyAddComponent, 
      canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_ADMINISTRATOR']}},
  
  { path: '', redirectTo: '/uniHome', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
