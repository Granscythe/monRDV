import { TestBed } from '@angular/core/testing';

import { AccueilHttpService } from './accueilHttp.service';

describe('AccueilService', () => {
  let service: AccueilHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccueilHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
