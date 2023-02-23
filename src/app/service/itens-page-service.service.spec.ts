import { TestBed } from '@angular/core/testing';

import { ItensPageServiceService } from './itens-page-service.service';

describe('ItensPageServiceService', () => {
  let service: ItensPageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItensPageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
