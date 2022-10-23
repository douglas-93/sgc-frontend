import {TestBed} from '@angular/core/testing';

import {CemiterioService} from './cemiterio.service';

describe('FormularioCemiterioService', () => {
    let service: CemiterioService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CemiterioService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
