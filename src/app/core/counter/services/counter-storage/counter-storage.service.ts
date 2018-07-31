import { Injectable } from '@angular/core';

@Injectable()
export class CounterStorageService {
    /**
     * Set session storage value by name
     */
    public setStore(storeName: string, value: any) {
        if (storeName && value) {
            window.sessionStorage.setItem(storeName, value);
        }
        return;
    }

    /**
     * Get session storage value by name
     */
    public getStore(storeName: string) {
        if (storeName) {
            const item = window.sessionStorage.getItem(storeName);
            return parseInt(item, 10);
        }
        return;
    }
}
