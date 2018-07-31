import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

    public increment(value: number): number {
        value++;
        return value;
    }
}
