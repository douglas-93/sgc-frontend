import { TestBed } from '@angular/core/testing';

import { FormularioCemiterioService } from './formulario-cemiterio.service';

describe('FormularioCemiterioService', () => {
  let service: FormularioCemiterioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioCemiterioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
