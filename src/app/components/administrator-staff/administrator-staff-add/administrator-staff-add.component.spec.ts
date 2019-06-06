import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorStaffAddComponent } from './administrator-staff-add.component';

describe('AdministratorStaffAddComponent', () => {
  let component: AdministratorStaffAddComponent;
  let fixture: ComponentFixture<AdministratorStaffAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorStaffAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorStaffAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
