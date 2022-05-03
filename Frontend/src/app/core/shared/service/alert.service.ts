import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root',
})

export class AlertService {

    CONFIG: any = {
        SUCCESS: 'success',
        ERROR: 'error',
        INFO: 'info',
        TOAST_POSITION: 'top-right',
        TOAST_TIMER: 5000,
        TOAST_SUCCESS_BG: '#008000',
        TOAST_ERROR_BG: '#FF0000',
        TOAST_TEXT_COLOR: '#ffffff',
        TOAST_WIDTH: '25rem'
    }

    constructor(
        private router: Router,
    ) { }

    toastSuccess(title: string) {
        Swal.fire({
            toast: true,
            position: this.CONFIG.TOAST_POSITION,
            showConfirmButton: false,
            icon: this.CONFIG.SUCCESS,
            timerProgressBar: true,
            timer: this.CONFIG.TOAST_TIMER,
            title: title,
            showCloseButton: true,
            background: this.CONFIG.TOAST_SUCCESS_BG,
            color: this.CONFIG.TOAST_TEXT_COLOR,
            width: this.CONFIG.TOAST_WIDTH
        });
    }

    toastError(title: string) {
        Swal.fire({
            toast: true,
            position: this.CONFIG.TOAST_POSITION,
            showConfirmButton: false,
            icon: this.CONFIG.ERROR,
            timerProgressBar: true,
            timer: this.CONFIG.TOAST_TIMER,
            title: title,
            showCloseButton: true,
            background: this.CONFIG.TOAST_ERROR_BG,
            color: this.CONFIG.TOAST_TEXT_COLOR,
            width: this.CONFIG.TOAST_WIDTH
        });
    }

    alertSuccess(title: any, text: any, confirmBtnText: string, routeLink?: any) {
        Swal.fire({
            title: title,
            text: text,
            icon: this.CONFIG.SUCCESS,
            confirmButtonText: confirmBtnText,
            allowOutsideClick: false,
            allowEscapeKey: false,
            customClass: {
                popup: 'alertPopup',
                title: 'alertSuccessTitle',
                htmlContainer: 'alertText',
                confirmButton: 'alertSuccessBtn'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                if (routeLink) {
                    this.router.navigate([routeLink]);
                }
            }
        });
    }

    alertError(title: any, text: any, confirmBtnText: string, routeLink?: any) {
        Swal.fire({
            title: title,
            text: text,
            icon: this.CONFIG.ERROR,
            confirmButtonText: confirmBtnText,
            allowOutsideClick: false,
            allowEscapeKey: false,
            customClass: {
                popup: 'alertPopup',
                title: 'alertErrorTitle',
                htmlContainer: 'alertText',
                confirmButton: 'alertErrorBtn'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                if (routeLink) {
                    this.router.navigate([routeLink]);
                }
            }
        });
    }

    alertInfo(title: any, text: any, confirmBtnText: string, cancelBtnText: string, routeLink?: any) {
        Swal.fire({
            title: title,
            text: text,
            confirmButtonText: confirmBtnText,
            showCancelButton: true,
            backdrop: true,
            cancelButtonText: cancelBtnText,
            allowOutsideClick: true,
            allowEscapeKey: true,
            customClass: {
                popup: 'alertPopup',
                title: 'alertInfoTitle',
                htmlContainer: 'alertText',
                confirmButton: 'alertInfoBtn'
            }
        }).then((result): any => {
            if (result.isConfirmed) {
                this.router.navigate([routeLink]);
            }
        });
    }
}