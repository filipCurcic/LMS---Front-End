import { TestBed } from '@angular/core/testing';

import { CourseAttendingService } from './course-attending.service';

describe('CourseAttendingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseAttendingService = TestBed.get(CourseAttendingService);
    expect(service).toBeTruthy();
  });
});
