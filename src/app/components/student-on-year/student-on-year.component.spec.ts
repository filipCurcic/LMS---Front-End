import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOnYearComponent } from './student-on-year.component';

describe('StudentOnYearComponent', () => {
  let component: StudentOnYearComponent;
  let fixture: ComponentFixture<StudentOnYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentOnYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOnYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
