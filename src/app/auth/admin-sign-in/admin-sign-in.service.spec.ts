import { TestBed } from '@angular/core/testing';

import { AdminSignInService } from './admin-sign-in.service';

describe('AdminSignInService', () => {
  let service: AdminSignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminSignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
