import { TestBed, inject } from '@angular/core/testing';

import { CounterService } from 'shared/services/counter/counter.service';

describe('CounterService', () => {
    let service: CounterService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CounterService
            ]
        });
        service = TestBed.get(CounterService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should increment number', () => {
        expect(service.increment(10)).toBe(11);
    });
});
