import { TestBed } from '@angular/core/testing';

import { StudyYearService } from './study-year.service';

describe('StudyYearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudyYearService = TestBed.get(StudyYearService);
    expect(service).toBeTruthy();
  });
});
