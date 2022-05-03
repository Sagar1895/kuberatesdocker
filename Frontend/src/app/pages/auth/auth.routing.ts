import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TwoFactorAuthComponent } from './two-factor-auth/two-factor-auth.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { title : 'Login' }
    },
    {
        path: 'signup',
        component: SignupComponent,
        data: { title : 'Signup' }
    },
    {
        path: 'two-factor-auth',
        component: TwoFactorAuthComponent,
        data: { title : 'Two Factor Authentication' }
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        data: { title : 'Forgot Password' }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule { }