import { TestBed } from '@angular/core/testing';

import { FarmacovigilanciaService } from './farmacovigilancia.service';

describe('FarmacovigilanciaService', () => {
  let service: FarmacovigilanciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmacovigilanciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
