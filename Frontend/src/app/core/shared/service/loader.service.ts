import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
    providedIn: 'root'
})

export class LoaderService {

    constructor(private spinner: NgxSpinnerService) { }

    showLoader() {
        this.spinner.show(undefined,
            {
                type: 'ball-clip-rotate',
                size: 'medium',
                bdColor: 'rgba(51, 51, 51, 0.7)',
                color: '#0000ff',
                fullScreen: true,
            });
    }

    hideLoader() {
        this.spinner.hide();
    }

}