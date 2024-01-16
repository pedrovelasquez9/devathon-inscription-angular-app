import { TestBed } from '@angular/core/testing';

import { SeniorityService } from './seniority.service';

describe('SeniorityService', () => {
  let service: SeniorityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeniorityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
