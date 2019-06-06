import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorStaffComponent } from './administrator-staff.component';

describe('AdministratorStaffComponent', () => {
  let component: AdministratorStaffComponent;
  let fixture: ComponentFixture<AdministratorStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
