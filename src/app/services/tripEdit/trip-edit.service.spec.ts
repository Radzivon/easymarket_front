import {TestBed} from '@angular/core/testing';

import {TripEditService} from './trip-edit.service';

describe('TripEditService', () => {
  let service: TripEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
