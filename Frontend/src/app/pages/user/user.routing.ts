import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { OrderDetailsComponent } from './order-details/order-details.component';
import { AddressComponent } from './address/address.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {
        path: 'products',
        loadChildren: () => import('../products/products.module').then(m => m.ProductsModule),
    },
    {
        path: 'cart',
        component: CartComponent,
        data: { title : 'Cart' },
    },
    {
        path: 'profile',
        component: ProfileComponent,
        data: { title : 'Profile' },

    },
    {
        path: 'order-details',
        component: OrderDetailsComponent,
        data: { title : 'Order Details' },
    },
    {
        path: 'address',
        component: AddressComponent,
        data: { title : 'Address' },
    },
    {
        path: 'checkout',
        component: CheckoutComponent,
        data: { title : 'Checkout' }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }