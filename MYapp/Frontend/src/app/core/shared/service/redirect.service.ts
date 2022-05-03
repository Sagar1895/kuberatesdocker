import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from './cookie.service';

@Injectable({
    providedIn: 'root'
})
export class RedirectService {

    constructor(
        private router: Router,
        private cookieService: CookieService
    ) { }

    setRedirectUrl() {
        const redirectUrl = 'user/products';
        if (this.cookieService.getCookie('authToken')) {
            this.router.navigate([redirectUrl]);
        }
    }

}
