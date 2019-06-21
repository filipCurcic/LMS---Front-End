import { TestBed } from '@angular/core/testing';

import { StudentportalService } from './studentportal.service';

describe('StudentportalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentportalService = TestBed.get(StudentportalService);
    expect(service).toBeTruthy();
  });
});
