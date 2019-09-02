import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import StudyYear from 'src/app/models/studyYear';
import { Student } from 'src/app/models/student';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { StudyYearService } from 'src/app/services/study-year/study-year.service';
import { AdministratorStaffService } from 'src/app/services/administrator-staff/administrator-staff.service';
import { ConfirmationDialogComponent } from '../../utils/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {

  public enrollmentToTheNextYearForm : FormGroup;
  public yearsOfStudies: StudyYear[] = [];
  students : Student[] = [];
  displayedColumns: string[] = ['no', 'name', 'lastName', 'jmbg', 'country', 'city', 'street', 'streetNumber', 'email', 'username', 'actions'];
  dataSource = new MatTableDataSource<Student>(this.students);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private formBuilder: FormBuilder, private studyYearService: StudyYearService, private administratorStaffService: AdministratorStaffService, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.enrollmentToTheNextYearForm = this.formBuilder.group({
      studyYear: ['', {validators: [Validators.required]}]
    });

    this.getYearsOfStudies();
  }

  getYearsOfStudies(){
    this.studyYearService.getAll().subscribe(data => {
      this.yearsOfStudies = data;
    })
  }

  getStudentsForEnrollmentToTheNextYear(studyYear: StudyYear){
    this.administratorStaffService.getStudentsForEnrollmentToTheNextYear(studyYear.id).subscribe((data: Student[]) => {
      this.students = data;
      this.dataSource.data = data;
    })
  }

  enrollmentToTheNextYear(student: Student){
    this.administratorStaffService.enrollmentToTheNextYear(student, this.enrollmentToTheNextYearForm.get('studyYear').value).subscribe(_ => {
      this.getStudentsForEnrollmentToTheNextYear(this.enrollmentToTheNextYearForm.get('studyYear').value);
      // this.snackBarService.openSnackBar("Successfully enrolled student", "X")
    })
  }

   openDialog(student: Student): void {
     const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
       width: '250px',
       data: {title: "Enroll student", content: "Are you sure you want to enroll this student?"}
     });

     dialogRef.afterClosed().subscribe(result => {
       if(result){
         this.enrollmentToTheNextYear(student);
       };
     });
   }

}