import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAttendingComponent } from './course-attending.component';

describe('CourseAttendingComponent', () => {
  let component: CourseAttendingComponent;
  let fixture: ComponentFixture<CourseAttendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAttendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAttendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
