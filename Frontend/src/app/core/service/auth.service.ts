import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from '../shared/service/cookie.service';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    authenticated: boolean = false;
    redirectUrl: string;
    interval: any = null;

    constructor(
        private router: Router,
        private cookieService: CookieService,
    ) { }

    public setRedirectUrl(url: string) {
        this.redirectUrl = url;
    }

    public auth(token: string): void {
        debugger
        if (token) {
            if (!this.cookieService.getCookie('authToken')) {
                this.cookieService.setCookie('authToken', token);
            }
            this.authenticated = true;
            this.redirectUrl = this.redirectUrl === undefined ? '/' : this.redirectUrl;
            this.router.navigate([this.redirectUrl]);
            this.setTimeInterval();
        }
    }

    public isAuthenticated(): boolean {
        debugger
        const authToken = this.cookieService.getCookie('authToken') || null;
        this.authenticated = false;
        if (authToken) {
            if (!this.interval) {
                this.setTimeInterval()
            }
            this.authenticated = true;
        }
        return this.authenticated;
    }

    public checkCookie = () => {
        const authToken = this.cookieService.getCookie('authToken') || null;
        if (!authToken) {
            this.authenticated = false;
            this.cookieService.deleteAllCookies();
            // alert('Session Timed out, Please login again!!!');  //change to alert modal popup
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
            this.router.navigate(['/login']);
        }
    }

    public logout = () => {
        localStorage.clear();
        sessionStorage.clear();
        try {
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        } catch (e) {
            console.log('error', e);
        }
        this.cookieService.deleteAllCookies();
        this.router.navigate(['/login']);
    }

    public setTimeInterval = () => {
        if (!this.interval) {
            this.interval = setInterval(() => {
                this.checkCookie() // runs every 100 ms and checks cookie
            }, 100);
        }
    }

}