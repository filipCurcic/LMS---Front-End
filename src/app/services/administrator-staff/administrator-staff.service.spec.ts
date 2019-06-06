import { TestBed } from '@angular/core/testing';

import { AdministratorStaffService } from './administrator-staff.service';

describe('AdministratorStaffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdministratorStaffService = TestBed.get(AdministratorStaffService);
    expect(service).toBeTruthy();
  });
});
