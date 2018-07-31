import { TestBed, inject } from '@angular/core/testing';

import { CounterStorageService } from 'core/counter/services/counter-storage/counter-storage.service';

describe('CounterStorageService', () => {
    let service: CounterStorageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CounterStorageService
            ]
        });
        service = TestBed.get(CounterStorageService);
        window.sessionStorage.clear();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should return undefined withour parameters', () => {
        expect(service.getStore(undefined)).toBeUndefined();
        expect(service.setStore(undefined, undefined)).toBeUndefined();
    });

    it('should get store', () => {
        expect(service.getStore('TEST')).toBeNaN();
    });

    it('should set store', () => {
        service.setStore('TEST', 1);
        expect(service.getStore('TEST')).toBe(1);
    });
});
