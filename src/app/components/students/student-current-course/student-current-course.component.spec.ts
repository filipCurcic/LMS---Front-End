import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCurrentCourseComponent } from './student-current-course.component';

describe('StudentCurrentCourseComponent', () => {
  let component: StudentCurrentCourseComponent;
  let fixture: ComponentFixture<StudentCurrentCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCurrentCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCurrentCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
