import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPastCourseComponent } from './student-past-course.component';

describe('StudentPastCourseComponent', () => {
  let component: StudentPastCourseComponent;
  let fixture: ComponentFixture<StudentPastCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPastCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPastCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
