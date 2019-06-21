import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyHistoryComponent } from './study-history.component';

describe('StudyHistoryComponent', () => {
  let component: StudyHistoryComponent;
  let fixture: ComponentFixture<StudyHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
