import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class IDGeneratorService {

    private normalIDCounts = 0;

    constructor() {
    }

    generateNormalIDs(name: any) {
        return name + (++this.normalIDCounts);
    }

}