import { TestBed } from '@angular/core/testing';

import { AbilidadePageServiceService } from './abilidade-page-service.service';

describe('AbilidadePageServiceService', () => {
  let service: AbilidadePageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbilidadePageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
