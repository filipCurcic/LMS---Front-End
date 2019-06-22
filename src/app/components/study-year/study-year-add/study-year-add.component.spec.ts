import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyYearAddComponent } from './study-year-add.component';

describe('StudyYearAddComponent', () => {
  let component: StudyYearAddComponent;
  let fixture: ComponentFixture<StudyYearAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyYearAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyYearAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
