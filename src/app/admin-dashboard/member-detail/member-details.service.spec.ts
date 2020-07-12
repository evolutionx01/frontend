import { TestBed } from '@angular/core/testing';

import { MemberDetailsService } from './member-details.service';

describe('MemberDetailsService', () => {
  let service: MemberDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
