import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

//Services
import { ProfessorsService } from 'src/app/services/professors-service/professors.service';
//Components
import { ProfessorsComponent } from './components/professors/professors.component';
import { StudentsComponent } from './components/students/students.component';
import { ProfessorProfileComponent } from './components/professor-profile/professor-profile.component';
import {LoginComponent} from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { RegisterComponent } from './components/register/register.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { UsersComponent } from './components/users/users.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseRegistrationComponent } from './components/course-registration/course-registration.component';
import { AdminStudentProfileOverviewComponent } from './components/admin-student-profile-overview/admin-student-profile-overview.component';
import { AdminProfessorProfileOverviewComponent } from './components/admin-professor-profile-overview/admin-professor-profile-overview.component';
import { AdminEditProfileComponent } from './components/admin-professor-profile-overview/admin-edit-profile/admin-edit-profile.component';
import { CalendarMainComponent } from './components/calendar-main/calendar-main.component';
import { Material } from './material';
import { DayComponent } from './components/day/day.component';
import {ExamsComponent} from './components/exams/exams.component'

@NgModule({
  declarations: [
    AppComponent,
    ProfessorsComponent,
    StudentsComponent,
    ProfessorProfileComponent,
    LoginComponent,
    AdminComponent,
    RegisterComponent,
    AdminPanelComponent,
    UsersComponent,
    CoursesComponent,
    CourseRegistrationComponent,
    AdminStudentProfileOverviewComponent,
    AdminProfessorProfileOverviewComponent,
    AdminEditProfileComponent,
    CalendarMainComponent,
    DayComponent,
    ExamsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Material // Material file with all dependencies
    
  ],
  providers: [ProfessorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
