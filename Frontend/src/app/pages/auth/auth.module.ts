import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth.routing';

import { WidgetsModule } from '../../core/shared/widgets/widgets.module';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TwoFactorAuthComponent } from './two-factor-auth/two-factor-auth.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        WidgetsModule,
    ],

    declarations: [
        LoginComponent,
        SignupComponent,
        ForgotPasswordComponent,
        TwoFactorAuthComponent,
    ],
})

export class AuthModule { }

