import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin.routing';

import { WidgetsModule } from '../../core/shared/widgets/widgets.module';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdminRoutingModule,
        WidgetsModule,
    ],

    declarations: [
        DashboardComponent,
    ],

})

export class AdminModule { }