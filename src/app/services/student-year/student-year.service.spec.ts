import { TestBed } from '@angular/core/testing';

import { StudentYearService } from './student-year.service';

describe('StudentYearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentYearService = TestBed.get(StudentYearService);
    expect(service).toBeTruthy();
  });
});
