import { TestBed } from '@angular/core/testing';

import { KeepPositionService } from './keep-position.service';

describe('KeepPositionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeepPositionService = TestBed.get(KeepPositionService);
    expect(service).toBeTruthy();
  });
});
