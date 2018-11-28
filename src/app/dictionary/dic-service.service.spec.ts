import { TestBed } from '@angular/core/testing';

import { DicServiceService } from './dic-service.service';

describe('DicServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DicServiceService = TestBed.get(DicServiceService);
    expect(service).toBeTruthy();
  });
});
