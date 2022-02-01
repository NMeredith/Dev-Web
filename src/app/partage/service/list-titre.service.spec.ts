import { TestBed } from '@angular/core/testing';

import { ListTitreService } from './list-titre.service';

describe('ListTitreService', () => {
  let service: ListTitreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListTitreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
