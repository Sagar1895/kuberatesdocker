import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, ReplaySubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    constructor() { }

    private dataSub = new BehaviorSubject<any>(undefined);
    // private dataSub = new ReplaySubject<any>(undefined);

    public sendData(key: any, value: any) {
        this.dataSub.next({ key, value });
    }

    public getData(key: any): Observable<any> {
        return this.dataSub.asObservable()
            .pipe(
                filter(data => data.key === key),
                map(data => data.value)
            );
    }

}