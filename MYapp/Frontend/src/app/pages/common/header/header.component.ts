import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../../core/shared/service/alert.service';
import { AuthService } from '../../../core/service/auth.service';
import { navItems } from '../../container/nav';
import Swal from 'sweetalert2';


@Component({
    selector: 'my-app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    @Input() public toggleLeftEvent: any;

    constructor(
        private router: Router,
        private authService: AuthService,
        private alertService: AlertService,
    ) { }

    ngOnInit(): void {
    }

    toggleLeftNav() {
        this.toggleLeftEvent();
    }

    onLogout() {
            Swal.fire({
                title: 'Logout',
                text: 'Are you sure you want to logout?',
                confirmButtonText: 'Logout',
                showCancelButton: true,
                backdrop: true,
                cancelButtonText: 'Cancel',
                allowOutsideClick: true,
                allowEscapeKey: true,
                customClass: {
                    popup: 'alertPopup',
                    title: 'alertInfoTitle',
                    htmlContainer: 'alertText',
                    confirmButton: 'alertInfoBtn'
                }
            }).then((result : any) => {
                if (result.isConfirmed) {
                   this.authService.logout();

                }
            });
    }

    public sidebarMinimized = false;
    public navItems = navItems;

    toggleMinimize(e: any) {
        this.sidebarMinimized = e;
    }

}