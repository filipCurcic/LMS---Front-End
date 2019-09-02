import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRealizationComponent } from './course-realization.component';

describe('CourseRealizationComponent', () => {
  let component: CourseRealizationComponent;
  let fixture: ComponentFixture<CourseRealizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseRealizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRealizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
