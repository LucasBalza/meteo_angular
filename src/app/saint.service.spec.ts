import { TestBed } from '@angular/core/testing';

import { SaintService } from './saint.service';

describe('SaintService', () => {
  let service: SaintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
