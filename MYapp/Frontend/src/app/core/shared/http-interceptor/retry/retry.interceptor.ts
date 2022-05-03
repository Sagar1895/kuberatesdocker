import { Injectable, Provider } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable()
export class RetryInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        // return next.handle(request).pipe(retry(2));
        return next.handle(request);
    }

}

export const RetryInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: RetryInterceptor,
    multi: true,
};
