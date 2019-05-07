import { TestBed } from '@angular/core/testing';

import { ProfessorsService } from './professors.service';

describe('ProfessorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfessorsService = TestBed.get(ProfessorsService);
    expect(service).toBeTruthy();
  });
});
