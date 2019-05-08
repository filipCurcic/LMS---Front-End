import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
//Material modules
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule, MatSortModule } from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
//Services
import { ProfessorsService } from 'src/app/services/professors-service/professors.service';
//Components
import { ProfessorsComponent } from './components/professors/professors.component';
import { StudentsComponent } from './components/students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessorsComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    //Material modules
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonToggleModule
    
  ],
  providers: [ProfessorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
