import { Component, OnInit } from '@angular/core';
import { SessionIdleService } from '../../core/shared/service/session-idle.service';
import { navItems } from './nav';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss']
})

export class ContainerComponent {

    public sidebarMinimized = false;
    public navItems = navItems;

    toggleMinimize(e: any) {
        this.sidebarMinimized = e;
    }

}
