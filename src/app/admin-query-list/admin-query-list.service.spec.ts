import { TestBed } from '@angular/core/testing';

import { AdminQueryListService } from './admin-query-list.service';

describe('AdminQueryListService', () => {
  let service: AdminQueryListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminQueryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
