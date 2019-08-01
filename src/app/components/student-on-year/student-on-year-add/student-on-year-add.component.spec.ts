import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOnYearAddComponent } from './student-on-year-add.component';

describe('StudentOnYearAddComponent', () => {
  let component: StudentOnYearAddComponent;
  let fixture: ComponentFixture<StudentOnYearAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentOnYearAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOnYearAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
