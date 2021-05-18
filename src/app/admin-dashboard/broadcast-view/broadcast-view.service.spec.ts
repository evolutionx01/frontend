import { TestBed } from '@angular/core/testing';

import { BroadcastViewService } from './broadcast-view.service';

describe('BroadcastViewService', () => {
  let service: BroadcastViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BroadcastViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
