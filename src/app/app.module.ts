import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import {ScrollingModule } from '@angular/cdk/scrolling'
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { NgbdCarouselBasic } from './carousel-basic';

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
import {ScrollDispatchModule} from  '@angular/cdk/scrolling';
import { NewsPageComponent } from './components/news/news-page/news-page.component'


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
    NewsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
    ReactiveFormsModule,
    ScrollDispatchModule,
    Material // Material file with all dependencies
    // NgbModule

  ],
  providers: [ProfessorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
