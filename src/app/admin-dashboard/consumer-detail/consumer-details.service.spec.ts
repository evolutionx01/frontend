import { TestBed } from '@angular/core/testing';

import { ConsumerDetailsService } from './consumer-details.service';

describe('ConsumerDetailsService', () => {
  let service: ConsumerDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumerDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
