import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CookieService {

    constructor() { }

    public getCookie = (name: any) => {
        return document.cookie.split('; ').reduce((r, v) => {
            const parts = v.split('=');
            return parts[0] === name ? decodeURIComponent(parts[1]) : r
        }, '');
    }

    public setCookie = (key: string, value: string) => {
        const domain = window.location.hostname === 'localhost' ? 'localhost' : window.location.hostname;
        var now = new Date();
        now.setTime(now.getTime() + 1 * 3600 * 1000);
        document.cookie = `${key}=${value}; domain=${domain} ; Path=/; expires= ${now.toUTCString()}`;
    }

    public deleteAllCookies = () => {
        const domain = window.location.hostname === 'localhost' ? 'localhost' : window.location.hostname;
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + `=; domain=${domain} ; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
        }
    }

}