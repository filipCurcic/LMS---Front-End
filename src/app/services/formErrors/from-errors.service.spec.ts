import { TestBed } from '@angular/core/testing';

import { FromErrorsService } from './from-errors.service';

describe('FromErrorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FromErrorsService = TestBed.get(FromErrorsService);
    expect(service).toBeTruthy();
  });
});
