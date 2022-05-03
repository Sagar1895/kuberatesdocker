import { Injectable, Provider } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from '../../service/cookie.service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

    token: string;

    constructor(
        private cookieService: CookieService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.token = this.cookieService.getCookie('authToken');
        if (this.token) {
            request = request.clone({
                headers: request.headers
                    .set('access-control-allow-origin', '*')
                    .set('authorization', this.token)
                    .set('accept', 'application/json')
                    .set('content-type', 'application/json'),
                // params: request.params.append('userName', 'abcd'),
                // setHeaders: { 'apiKey': 'abcd' }
                // body: { ...request.body, token: this.token },
            })
        } else {
            request = request.clone({
                headers: request.headers
                    .set('access-control-allow-origin', '*')
                    .set('accept', 'application/json')
                    .set('content-type', 'application/json')
            });
        }
        return next.handle(request);
    }

}

export const CustomHttpInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: CustomHttpInterceptor,
    multi: true,
};