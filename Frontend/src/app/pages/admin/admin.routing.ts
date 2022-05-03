import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'products',
        loadChildren: () => import('../products/products.module').then(m => m.ProductsModule),
    },
    {
        path: '',
        component: DashboardComponent,
        data: { title : 'Dashboard' }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }