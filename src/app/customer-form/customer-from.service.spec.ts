import { TestBed } from '@angular/core/testing';

import { CustomerFromService } from './customer-from.service';

describe('CustomerFromService', () => {
  let service: CustomerFromService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerFromService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
