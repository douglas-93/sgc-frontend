import { TestBed } from '@angular/core/testing';

import { SepulturaService } from './sepultura.service';

describe('SepulturaServiceService', () => {
  let service: SepulturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SepulturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
