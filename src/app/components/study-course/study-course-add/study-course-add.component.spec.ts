import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyCourseAddComponent } from './study-course-add.component';

describe('StudyCourseAddComponent', () => {
  let component: StudyCourseAddComponent;
  let fixture: ComponentFixture<StudyCourseAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyCourseAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyCourseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
