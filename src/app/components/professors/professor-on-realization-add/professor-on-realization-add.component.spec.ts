import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorOnRealizationAddComponent } from './professor-on-realization-add.component';

describe('ProfessorOnRealizationAddComponent', () => {
  let component: ProfessorOnRealizationAddComponent;
  let fixture: ComponentFixture<ProfessorOnRealizationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorOnRealizationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorOnRealizationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
