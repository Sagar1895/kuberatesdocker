import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HttpService } from '../../../core/shared/http/http.service';
import { AuthService } from '../../../core/service/auth.service';
import { RedirectService } from '../../../core/shared/service/redirect.service';

import CustomValidator from '../../../core/shared/validators/custom-validators';

@Component({
    selector: 'app-two-factor-auth',
    templateUrl: './two-factor-auth.component.html',
    styleUrls: ['./two-factor-auth.component.scss', '../auth.module.scss']
})

export class TwoFactorAuthComponent implements OnInit {

    mfaForm: FormGroup;

    submitted: boolean;

    token: string;
    redirectUrl: string;
    errorMessage: string;
    isError: boolean = false;
    registerdUsers: any = [];

    constructor(
        private router: Router,
        private authService: AuthService,
        private httpService: HttpService,
        private redirectService: RedirectService,
        private formBuilder: FormBuilder
    ) {
        this.initForm();
    }

    ngOnInit(): void {
        this.redirectService.setRedirectUrl();
    }

    initForm() {
        this.submitted = false;
        this.mfaForm = this.formBuilder.group({
            pin: ['', [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(6),
                CustomValidator.numbersOnlyValidator
            ]
            ],
        });
    }

    get f() {
        return this.mfaForm.controls;
    }

    onVerify() {
        this.submitted = true;
        if (this.mfaForm.invalid) {
            return;
        }
        if (localStorage.getItem('registerdUsers')) {
            this.registerdUsers = JSON.parse(localStorage.getItem('registerdUsers') || '{}');
            let found = this.registerdUsers.some((el: any) => {
                return el.pin === this.f['pin'].value;
            });
            if (!found) {
                this.isError = true;
                this.errorMessage = 'Invalid PIN';
            } else {
                this.token = 'success';
                this.redirectUrl = '/dashboard-test';
                this.authService.setRedirectUrl(this.redirectUrl);
                this.authService.auth(this.token);
            }
        }
    }

    resetForm() {
        this.submitted = false;
        this.mfaForm.reset();
    }

}
