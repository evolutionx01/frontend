import { TestBed } from '@angular/core/testing';

import { BroadCastViewService } from './broad-cast-view.service';

describe('BroadCastViewService', () => {
  let service: BroadCastViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BroadCastViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
