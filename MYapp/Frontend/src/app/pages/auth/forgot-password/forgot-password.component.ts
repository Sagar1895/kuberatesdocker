import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GlobalConstants } from '../../../core/shared/constants/global.constants';
import { LoaderService } from '../../../core/shared/service/loader.service';
import { RedirectService } from '../../../core/shared/service/redirect.service';
import { HttpService } from '../../../core/shared/http/http.service';
import { AlertService } from '../../../core/shared/service/alert.service';

import CustomValidator from '../../../core/shared/validators/custom-validators';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss', '../auth.module.scss']
})

export class ForgotPasswordComponent implements OnInit {

    forgotPasswordForm: FormGroup;
    resetForm: FormGroup;

    submitted: boolean;
    rfSubmitted: boolean;

    redirectUrl: string;
    captcha: any = {};
    allCharacters: any = [];
    captchaValue: any;
    showEmail: boolean = true;
    showPhone: boolean = false;
    errorMessage: string;
    isError: boolean = false;
    showForgotPasswordForm: boolean = true;
    validPhoneNumber: number;

    constructor(
        private router: Router,
        private loader: LoaderService,
        private redirectService: RedirectService,
        private formBuilder: FormBuilder,
        private httpService: HttpService,
        private alertService: AlertService,
    ) {
        this.initOtpForm();
        this.initResetForm();
    }

    ngOnInit(): void {
        this.redirectService.setRedirectUrl();
        this.setReceiveMode();
        setTimeout(() => {
            this.getCaptcha();
        }, 1);
    }

    initOtpForm = () => {
        this.submitted = false;
        this.forgotPasswordForm = this.formBuilder.group({
            receiveMode: ['email', Validators.required],
            email: [''],
            phoneNumber: [''],
            captchaText: [''],
            captchaValue: ['', [Validators.required, Validators.maxLength(6)]],
        },
            {
                validators: [CustomValidator.stringMatch('captchaText', 'captchaValue')]
            }

        );
    }

    initResetForm = () => {
        this.rfSubmitted = false;
        this.resetForm = this.formBuilder.group({
            otp: [{ value: "", disabled: false }, Validators.required],
            newPassword: ['', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(10)
            ]
            ],
            confirmPassword: ['', Validators.required],
        },
            {
                validators: [CustomValidator.stringMatch('newPassword', 'confirmPassword')]
            }

        );
    }

    get f() {
        return this.forgotPasswordForm.controls;
    }

    get rf() {
        return this.resetForm.controls;
    }

    getCaptcha = () => {
        this.captcha = document.querySelector(".captcha") || {};
        this.allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
            'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
            'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
            't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < 6; i++) {
            let randomCharacter = this.allCharacters[Math.floor(Math.random() * this.allCharacters.length)];
            this.forgotPasswordForm.patchValue({ 'captchaText': this.captcha.innerText += `${randomCharacter}` });
        }
    }

    reloadCaptcha = () => {
        this.removeCaptchaContent();
        this.getCaptcha();
    }

    removeCaptchaContent = () => {
        this.forgotPasswordForm.patchValue({ 'captchaValue': null });
        this.captcha.innerText = '';
    }

    setReceiveMode = () => {
        if (this.showForgotPasswordForm) {
            const emailControl: any = this.forgotPasswordForm.get('email');
            const phoneControl: any = this.forgotPasswordForm.get('phoneNumber');

            this.reloadCaptcha();

            if (this.forgotPasswordForm.value.receiveMode === 'email') {
                this.showEmail = true;
                this.showPhone = false;
                this.forgotPasswordForm.patchValue({ 'phoneNumber': null });
                emailControl.setValidators([
                    Validators.required,
                    CustomValidator.emailValidator
                ]);
                phoneControl.setValidators(null);
            }
            else if (this.forgotPasswordForm.value.receiveMode === 'sms') {
                this.showEmail = false;
                this.showPhone = true;
                this.forgotPasswordForm.patchValue({ 'email': null });
                emailControl.setValidators(null);
                phoneControl.setValidators([
                    Validators.required,
                    Validators.minLength(10),
                    Validators.maxLength(10),
                    CustomValidator.numbersOnlyValidator
                ]);
            }
            else if (this.forgotPasswordForm.value.receiveMode === 'call') {
                this.showEmail = false;
                this.showPhone = true;
                this.forgotPasswordForm.patchValue({ 'email': null });
                emailControl.setValidators(null);
                phoneControl.setValidators([
                    Validators.required,
                    Validators.minLength(10),
                    Validators.maxLength(10),
                    CustomValidator.numbersOnlyValidator
                ]);
            }
            emailControl.updateValueAndValidity();
            phoneControl.updateValueAndValidity();
        }
    }

    sendOtp = () => {
        this.submitted = true;
        if (this.forgotPasswordForm.invalid) {
            return;
        }
        this.loader.showLoader();
        const payLoad = {
            email: this.forgotPasswordForm.value.email,
            phoneNumber: this.forgotPasswordForm.value.phoneNumber,
            receiveMode: this.forgotPasswordForm.value.receiveMode
        }
        this.httpService.post(GlobalConstants.USER_SEND_OTP, payLoad)
            .subscribe({
                next: (res: any) => {
                    this.loader.hideLoader();
                    this.showForgotPasswordForm = false;
                    this.alertService.toastSuccess(res.body.message);
                    this.validPhoneNumber = res.body.phoneNumber;
                },
                error: (err: any) => {
                    this.loader.hideLoader();
                    if (err.error.message) {
                        this.alertService.toastError(`${err.error.message}`);
                    } else {
                        this.alertService.alertError('UH-OH!!!', `Sorry, We are unable to send OTP at this moment...Please try again!!!`, 'OK');
                    }
                },
            });
    }

    verifyOTP = () => {
        if (this.resetForm.value.otp && this.resetForm.value.otp.length === 6) {
            this.loader.showLoader();
            const payLoad = {
                phoneNumber: this.validPhoneNumber,
                otp: this.resetForm.value.otp
            }
            this.httpService.post(GlobalConstants.USER_VERIFY_OTP, payLoad)
                .subscribe({
                    next: (res: any) => {
                        this.loader.hideLoader();
                        if (res.body.verified) {
                            this.alertService.toastSuccess(res.body.message);
                            this.rf['otp'].disable();
                        }
                    },
                    error: (err: any) => {
                        this.loader.hideLoader();
                        if (err.error.message) {
                            this.alertService.toastError(`${err.error.message}`);
                        } else {
                            this.alertService.alertError('UH-OH!!!', `Sorry, We are unable to verify OTP at this moment...Please try again!!!`, 'OK');
                        }
                    },
                });
        }
    }

    onReset = () => {
        this.rfSubmitted = true;
        if (this.resetForm.invalid) {
            return;
        }
        this.loader.showLoader();
        const payLoad = {
            phoneNumber: this.validPhoneNumber,
            password: this.resetForm.value.newPassword,
            confirmPassword: this.resetForm.value.confirmPassword,
        }
        this.httpService.put(GlobalConstants.USER_RESET_PASSWORD, payLoad)
            .subscribe({
                next: (res: any) => {
                    this.loader.hideLoader();
                    this.alertService.toastSuccess(res.body.message);
                    this.router.navigate(['/login']);
                },
                error: (err: any) => {
                    this.loader.hideLoader();
                    if (err.error.message) {
                        this.alertService.toastError(`${err.error.message}`);
                    } else {
                        this.alertService.alertError('UH-OH!!!', `Sorry, We are unable to reset your password at this moment...Please try again!!!`, 'OK');
                    }
                },
            });
    }
}