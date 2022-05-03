import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user.routing';

import { WidgetsModule } from '../../core/shared/widgets/widgets.module';

import { CartComponent } from './cart/cart.component';
import { AddressComponent } from './address/address.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';
import { AddEditAddressComponent } from './add-edit-address/add-edit-address.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UserRoutingModule,
        WidgetsModule,
    ],

    declarations: [
        CartComponent,
        AddressComponent,
        OrderDetailsComponent,
        CheckoutComponent,
        ProfileComponent,
        AddEditAddressComponent,
    ],
})

export class UserModule { }

