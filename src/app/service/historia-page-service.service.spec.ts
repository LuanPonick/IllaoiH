import { TestBed } from '@angular/core/testing';

import { HistoriaPageServiceService } from './historia-page-service.service';

describe('HistoriaPageServiceService', () => {
  let service: HistoriaPageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriaPageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
