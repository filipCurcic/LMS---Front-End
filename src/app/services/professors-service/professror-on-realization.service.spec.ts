import { TestBed } from '@angular/core/testing';

import { ProfessrorOnRealizationService } from './professror-on-realization.service';

describe('ProfessrorOnRealizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfessrorOnRealizationService = TestBed.get(ProfessrorOnRealizationService);
    expect(service).toBeTruthy();
  });
});
