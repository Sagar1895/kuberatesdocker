import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GlobalConstants } from '../../../core/shared/constants/global.constants';
import { HttpService } from '../../../core/shared/http/http.service';

import { LoaderService } from '../../../core/shared/service/loader.service';
import { RedirectService } from '../../../core/shared/service/redirect.service';
import { AlertService } from '../../../core/shared/service/alert.service';

import CustomValidator from '../../../core/shared/validators/custom-validators';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss', '../auth.module.scss']
})

export class SignupComponent implements OnInit {

    signUpForm: FormGroup;

    submitted: boolean;
    redirectUrl: string;

    constructor(
        private router: Router,
        private httpService: HttpService,
        private loader: LoaderService,
        private redirectService: RedirectService,
        private formBuilder: FormBuilder,
        private alertService: AlertService,
    ) {
        this.initForm();
    }

    ngOnInit(): void {
        this.redirectService.setRedirectUrl();
    }

    initForm = () => {
        this.submitted = false;
        this.signUpForm = this.formBuilder.group({
            firstName: ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(20),
                CustomValidator.alPhaValidator
            ]
            ],
            lastName: ['', [
                Validators.required,
                Validators.maxLength(20),
                CustomValidator.alPhaValidator
            ]
            ],
            email: ['', [
                Validators.required,
                CustomValidator.emailValidator
            ]
            ],
            phoneNumber: ['', [
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(10),
                CustomValidator.numbersOnlyValidator
            ]
            ],
            password: ['', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(20)
            ]
            ],
            confirmPassword: ['', Validators.required],
            pin: ['', [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(6),
                CustomValidator.numbersOnlyValidator
            ]
            ],
        },
            {
                validators: [CustomValidator.stringMatch('password', 'confirmPassword')]
            }
        );
    }

    get f() {
        return this.signUpForm.controls;
    }

    onSignUp = () => {
        this.submitted = true;
        if (this.signUpForm.invalid) {
            return;
        }
        this.loader.showLoader();
        this.httpService.post(GlobalConstants.USER_SIGNUP, this.signUpForm.value)
            .subscribe({
                next: (res: any) => {
                    this.loader.hideLoader();
                    this.alertService.alertSuccess(`Thank you ${res.body.data.firstName}`, 'Congratulations, Your account has been successfully created.', 'Login', 'login');
                },
                error: (err: any) => {
                    this.loader.hideLoader();
                    if (err.error.message) {
                        this.alertService.toastError(`${err.error.message}`);
                    } else {
                        this.alertService.alertError('UH-OH!!!', `Sorry, We are unable to create your account right now...Please try again!!!`, 'OK');
                    }
                },
            });
    }

    resetForm = () => {
        this.submitted = false;
        this.signUpForm.reset();
    }

}
