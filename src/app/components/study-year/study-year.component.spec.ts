import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyYearComponent } from './study-year.component';

describe('StudyYearComponent', () => {
  let component: StudyYearComponent;
  let fixture: ComponentFixture<StudyYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
