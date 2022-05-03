import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './../service/auth.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    public canActivate(): boolean {
        debugger
        if (!this.authService.isAuthenticated()) {
            this.authService.setRedirectUrl(this.router.url);
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }

}