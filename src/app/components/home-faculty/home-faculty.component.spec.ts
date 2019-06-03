import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFacultyComponent } from './home-faculty.component';

describe('HomeFacultyComponent', () => {
  let component: HomeFacultyComponent;
  let fixture: ComponentFixture<HomeFacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
