import { TestBed } from '@angular/core/testing';

import { LiveTimeService } from './live-time.service';

describe('LiveTimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiveTimeService = TestBed.get(LiveTimeService);
    expect(service).toBeTruthy();
  });
});
