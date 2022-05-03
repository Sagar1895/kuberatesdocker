import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ProductsComponent } from './products/products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {
        path: '',
        component: AllProductsComponent,
        data: { title: 'All Products' },
    },
    {
        path: 'product-details',
        component: ProductDetailsComponent,
        data: { title: 'Product Details' },
    },
    {
        path: 'mobiles',
        component: ProductsComponent,
        data: { title: 'Mobiles' },
    },
    {
        path: 'laptops',
        component: ProductsComponent,
        data: { title: 'Laptops' },
    },
    {
        path: 'television',
        component: ProductsComponent,
        data: { title: 'Television' },
    },
    {
        path: 'cameras',
        component: ProductsComponent,
        data: { title: 'Cameras' },
    },
    {
        path: 'watches',
        component: ProductsComponent,
        data: { title: 'Watches' },
    },
   

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductRoutingModule { }

function extract(arg0: string): any {
    throw new Error('Function not implemented.');
}
