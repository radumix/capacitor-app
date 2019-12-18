import { TestBed } from '@angular/core/testing';

import { UtilsServiceService } from './utils-service.service';

describe('UtilsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilsServiceService = TestBed.get(UtilsServiceService);
    expect(service).toBeTruthy();
  });
});
