import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinExamComponent } from './checkin-exam.component';

describe('CheckinExamComponent', () => {
  let component: CheckinExamComponent;
  let fixture: ComponentFixture<CheckinExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
