import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
<<<<<<< HEAD
import {MatTreeModule} from '@angular/material/tree';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';

=======
import {MatCardModule} from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
>>>>>>> 4fb4942088a21e201547154343f619d932180993
//Services
import { ProfessorsService } from 'src/app/services/professors-service/professors.service';
//Components
import { ProfessorsComponent } from './components/professors/professors.component';
import { StudentsComponent } from './components/students/students.component';
<<<<<<< HEAD
import { ProfessorProfileComponent } from './components/professor-profile/professor-profile.component';
=======
import { LoginComponent } from './components/login/login.component';
>>>>>>> 4fb4942088a21e201547154343f619d932180993

@NgModule({
  declarations: [
    AppComponent,
    ProfessorsComponent,
    StudentsComponent,
<<<<<<< HEAD
    ProfessorProfileComponent
=======
    LoginComponent
>>>>>>> 4fb4942088a21e201547154343f619d932180993
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
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
<<<<<<< HEAD
    MatButtonToggleModule,
    MatTreeModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatInputModule,
    DragDropModule
=======
    MatButtonToggleModule, 
    MatCardModule,
    MatInputModule
>>>>>>> 4fb4942088a21e201547154343f619d932180993
    
  ],
  providers: [ProfessorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
