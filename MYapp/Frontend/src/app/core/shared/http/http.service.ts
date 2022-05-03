import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class HttpService {

    constructor(
        private http: HttpClient,
    ) { }

    public get(url: string, options?: HttpHeaders | any) {
        return this.http.get(url, { observe: 'response' });
    }

    public post(url: string, data: any, options?: HttpHeaders | any) {
        return this.http.post(url, data, { observe: 'response' });
    }

    public put(url: string, data: any, options?: HttpHeaders | any) {
        return this.http.put(url, data, { observe: 'response' });
    }

    public delete(url: string, options?: HttpHeaders | any) {
        return this.http.delete(url, { observe: 'response' });
    }

}