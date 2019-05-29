import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfessorProfileOverviewComponent } from './admin-professor-profile-overview.component';

describe('AdminProfessorProfileOverviewComponent', () => {
  let component: AdminProfessorProfileOverviewComponent;
  let fixture: ComponentFixture<AdminProfessorProfileOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProfessorProfileOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProfessorProfileOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
