import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GlobalConstants } from '../../../core/shared/constants/global.constants';
import { HttpService } from '../../../core/shared/http/http.service';
import { RedirectService } from '../../../core/shared/service/redirect.service';
import { AlertService } from '../../../core/shared/service/alert.service';
import { AuthService } from '../../../core/service/auth.service';
import { LoaderService } from '../../../core/shared/service/loader.service';

import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

import CustomValidator from '../../../core/shared/validators/custom-validators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss', '../auth.module.scss']
})

export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    submitted: boolean;
    redirectUrl: string;
    token: string;

    constructor(
        private router: Router,
        private httpService: HttpService,
        private redirectService: RedirectService,
        private formBuilder: FormBuilder,
        private socialAuthService: SocialAuthService,
        private authService: AuthService,
        private alertService: AlertService,
        private loader: LoaderService,
    ) {
        this.initForm();
    }

    ngOnInit(): void {
        this.redirectService.setRedirectUrl();
    }

    initForm = () => {
        this.submitted = false;
        this.loginForm = this.formBuilder.group({
            email: ['', [
                Validators.required,
                CustomValidator.emailValidator
            ]
            ],
            password: ['', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(20)
            ]
            ],
            // rememberMe: ['']
        });
    }

    get f() {
        return this.loginForm.controls;
    }

    onLogin = () => {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.loader.showLoader();
        this.httpService.post(GlobalConstants.USER_LOGIN, this.loginForm.value)
            .subscribe({
                next: (res: any) => {
                    this.loader.hideLoader();
                    this.token = res.body.data.authToken;
                    this.redirectUrl = 'user/products';
                    this.authService.setRedirectUrl(this.redirectUrl);
                    this.authService.auth(this.token);
                },
                error: (err: any) => {
                    this.loader.hideLoader();
                    if (err.error.message) {
                        this.alertService.toastError(`${err.error.message}`);
                    } else {
                        this.alertService.alertError('UH-OH!!!', `Sorry, We are unable to login at this moment...Please try again!!!`, 'OK');
                    }
                },
            });
    }

    socialLogin = (provider: any) => {
        let loginProvider: any;
        if (provider === 'google') {
            loginProvider = GoogleLoginProvider;
        } else if (provider === 'facebook') {
            loginProvider = FacebookLoginProvider;
        }
        this.socialAuthService.signIn(loginProvider.PROVIDER_ID)
            .then(
                () => {
                    this.token = 'success';
                    this.redirectUrl = 'user/products';
                    this.authService.setRedirectUrl(this.redirectUrl);
                    this.authService.auth(this.token);
                }
            );
    }

    resetForm = () => {
        this.submitted = false;
        this.loginForm.reset();
    }

}