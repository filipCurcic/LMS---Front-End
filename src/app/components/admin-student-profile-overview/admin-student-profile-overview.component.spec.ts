import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentProfileOverviewComponent } from './admin-student-profile-overview.component';

describe('AdminStudentProfileOverviewComponent', () => {
  let component: AdminStudentProfileOverviewComponent;
  let fixture: ComponentFixture<AdminStudentProfileOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStudentProfileOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStudentProfileOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
