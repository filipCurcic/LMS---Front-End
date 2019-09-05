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
import { HomeUniversityComponent } from './components/home-university/home-university.component';
import { HomeFacultyComponent } from './components/home-faculty/home-faculty.component';
import { OsmComponent } from './components/osm/osm.component';
import { RoleGuard } from './authorization/role.guard';
import { StudentAddComponent } from './components/students/student-add/student-add.component';
import { AdministratorStaffAddComponent } from './components/administrator-staff/administrator-staff-add/administrator-staff-add.component';
import { StudentPortalComponent } from './components/student-portal/student-portal.component';
import { StudyCourseAddComponent } from './components/study-course/study-course-add/study-course-add.component';
import { FacultyAddComponent } from './components/home-faculty/faculty-add/faculty-add.component';
import { StudyYearAddComponent } from './components/study-year/study-year-add/study-year-add.component';
import { ProfessorAddComponent } from './components/professors/professor-add/professor-add.component';
import { StudentOnYearAddComponent } from './components/student-on-year/student-on-year-add/student-on-year-add.component';
import { CourseRegistrationComponent } from './components/course-registration/course-registration.component';
import { ProfessorOnRealizationAddComponent } from './components/professors/professor-on-realization-add/professor-on-realization-add.component';
import { CourseRealizationAddComponent } from './components/course-realization/course-realization-add/course-realization-add.component';
import { CoursesComponent } from './components/courses/courses.component';
import { StudentCurrentCourseComponent } from './components/students/student-current-course/student-current-course.component';
import { StudentExamComponent } from './components/students/student-exam/student-exam.component';
import { StudentPastCourseComponent } from './components/students/student-past-course/student-past-course.component';
import { EnrollComponent } from './components/administrator-staff/enroll/enroll.component';
import { NewsPageComponent } from './components/news/news-page/news-page.component';
import { ExamsComponent } from './components/exams/exams.component';
import { NewsAddComponent } from './components/news/news-add/news-add.component';

const routes: Routes = [
  {path: 'students', component:StudentsComponent, 
          canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_ADMINISTRATOR', 'ROLE_ADMINISTRATOR_STAFF']}},
  {path:'professors', component:ProfessorsComponent,
          canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_ADMINISTRATOR', 'ROLE_ADMINISTRATOR_STAFF']}},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'admin_tables', component:AdminComponent},
  {path:'admin_panel', component:AdminPanelComponent,
         canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_ADMINISTRATOR']}},
  {path:'calendar', component:CalendarMainComponent},
  {path:'uniHome', component:HomeUniversityComponent},
  {path:'studentPortal', component:StudentPortalComponent},
  {path:'facHome/:id', component:HomeFacultyComponent},
  {path:'map', component:OsmComponent},
  {path:'day', component:DayComponent},
  {path:'course', component:CoursesComponent},
  {path:'exams', component:ExamsComponent},
  {path: 'news/:id', component: NewsPageComponent},
  {path: 'news_add', component: NewsAddComponent},
  {path: 'register-student', component: StudentAddComponent, 
      canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_ADMINISTRATOR', 'ROLE_ADMINISTRATOR_STAFF']}},
  {path: 'register-professor', component: ProfessorAddComponent, 
      canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_ADMINISTRATOR', 'ROLE_ADMINISTRATOR_STAFF']}},
  { path: 'edit/professor/:username', component: ProfessorAddComponent, 
      canActivate: [RoleGuard], data: {expectedRoles: ['ROLE_PROFESSOR', 'ROLE_ADMINISTRATOR_STAFF']}},
  { path: 'edit/administrator-staff/:username', component: AdministratorStaffAddComponent, 
      canActivate: [RoleGuard], data: {expectedRoles: ['ROLE_ADMINISTRATOR_STAFF']}},
  {path: 'register-administrator-staff', component: AdministratorStaffAddComponent, 
      canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_ADMINISTRATOR']}},
  { path: 'edit/student/:username', component: StudentAddComponent, 
      canActivate: [RoleGuard], data: {expectedRoles: ['ROLE_STUDENT', 'ROLE_ADMINISTRATOR_STAFF']}},
  {path: 'add-study-course', component: StudyCourseAddComponent, 
      canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_ADMINISTRATOR']}},
  {path: 'add-faculty', component: FacultyAddComponent, 
      canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_ADMINISTRATOR']}},
  {path: 'add-study-year', component: StudyYearAddComponent, 
      canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_ADMINISTRATOR_STAFF']}},
  {path: 'add-student-on-year', component: StudentOnYearAddComponent, 
      canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_ADMINISTRATOR_STAFF']}},
  {path: 'add-course', component: CourseRegistrationComponent, 
      canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_ADMINISTRATOR_STAFF']}},
  {path: 'add-professor-on-realization', component: ProfessorOnRealizationAddComponent, 
      canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_ADMINISTRATOR_STAFF']}},
  {path: 'add-course-realization', component: CourseRealizationAddComponent,
      canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_ADMINISTRATOR_STAFF']}},
  {path: 'add-professor-on-realization', component: ProfessorOnRealizationAddComponent,
      canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_ADMINISTRATOR_STAFF']}},
  {path: 'current-courses', component: StudentCurrentCourseComponent,
      canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_STUDENT']}},
  {path: 'past-courses', component: StudentPastCourseComponent,
      canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_STUDENT']}},
  {path: 'enroll-student-to-the-next-year', component: EnrollComponent,
      canActivate: [RoleGuard], data: { expectedRoles: ['ROLE_ADMINISTRATOR_STAFF']}},
  
  { path: '', redirectTo: '/uniHome', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
