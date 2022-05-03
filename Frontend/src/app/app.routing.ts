import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guard/auth.guard';
import { SocialGuard } from './core/guard/social.guard';

import { ContainerComponent } from './pages/container/container.component';
import { PageNotFoundComponent } from './pages/common/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: '',
        component: ContainerComponent,
        canActivate: [AuthGuard, SocialGuard],
        children: [
            {
                path: 'admin',
                loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
            },
            {
                path: 'user',
                loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
            },
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: { title : 'Page Not Found' }

    },

];

export const appRoutingModule = RouterModule.forRoot(routes);