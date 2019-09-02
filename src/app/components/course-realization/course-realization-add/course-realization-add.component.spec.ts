import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRealizationAddComponent } from './course-realization-add.component';

describe('CourseRealizationAddComponent', () => {
  let component: CourseRealizationAddComponent;
  let fixture: ComponentFixture<CourseRealizationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseRealizationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRealizationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
