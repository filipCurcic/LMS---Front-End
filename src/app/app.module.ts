import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { NgbdCarouselBasic } from './carousel-basic';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './authorization/auth-interceptor'
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
import { CalendarMainComponent } from './components/calendar-main/calendar-main.component';
import { Material } from './material';
import { DayComponent } from './components/day/day.component';
import { HomeUniversityComponent } from './components/home-university/home-university.component';
import { HomeFacultyComponent } from './components/home-faculty/home-faculty.component';
import { OsmComponent } from './components/osm/osm.component';
import { StudentAddComponent } from './components/students/student-add/student-add.component';
import { UserAddComponent } from './components/users/user-add/user-add.component';
import { AddressComponent } from './components/address/address.component';
import { NewsComponent } from './components/news/news.component';
import { NewsPageComponent } from './components//news/news-page/news-page.component'
import { AdministratorStaffComponent } from './components/administrator-staff/administrator-staff.component';
import { AdministratorStaffAddComponent } from './components/administrator-staff/administrator-staff-add/administrator-staff-add.component';
import { StudyCourseAddComponent } from './components/study-course/study-course-add/study-course-add.component';
import { StudyCourseComponent } from './components/study-course/study-course.component';
import { StudyYearAddComponent } from './components/study-year/study-year-add/study-year-add.component';
import { StudyYearComponent } from './components/study-year/study-year.component';
import { FacultyAddComponent } from './components/home-faculty/faculty-add/faculty-add.component';
import { ProfessorAddComponent } from './components/professors/professor-add/professor-add.component';
import { from } from 'rxjs';
import { StudentPortalComponent } from './components/student-portal/student-portal.component';
import { StudyHistoryComponent } from './components/student-portal/study-history/study-history.component';
import { CheckinExamComponent } from './components/student-portal/checkin-exam/checkin-exam.component';

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
    CalendarMainComponent,
    DayComponent,
    HomeUniversityComponent,
    HomeFacultyComponent,
    OsmComponent,
    StudentAddComponent,
    UserAddComponent,
    AddressComponent,
    NewsComponent,
    NewsPageComponent,
    AdministratorStaffComponent,
    AdministratorStaffAddComponent,
    StudentPortalComponent,
    StudyHistoryComponent,
    CheckinExamComponent,
    StudyCourseAddComponent,
    StudyCourseComponent,
    StudyYearAddComponent,
    StudyYearComponent,
    FacultyAddComponent,
    ProfessorAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Material // Material file with all dependencies
    // NgbModule

  ],
  providers: [ProfessorsService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
