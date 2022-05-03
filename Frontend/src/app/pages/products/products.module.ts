import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductRoutingModule } from './products.routing';

import { WidgetsModule } from '../../core/shared/widgets/widgets.module';

import { ProductsComponent } from './products/products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProductRoutingModule,
        WidgetsModule,
    ],

    declarations: [
        ProductsComponent,
        ProductDetailsComponent,
        AllProductsComponent,
    ],
})

export class ProductsModule { }

