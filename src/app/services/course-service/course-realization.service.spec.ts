import { TestBed } from '@angular/core/testing';

import { CourseRealizationService } from './course-realization.service';

describe('CourseRealizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseRealizationService = TestBed.get(CourseRealizationService);
    expect(service).toBeTruthy();
  });
});
