import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthGuard } from './core/guard/auth.guard';
import { CustomHttpInterceptorProvider } from './core/shared/http-interceptor/custom-http/customHttp.interceptor';
import { RetryInterceptorProvider } from './core/shared/http-interceptor/retry/retry.interceptor';

import { appRoutingModule } from './app.routing';

import { NgxSpinnerModule } from "ngx-spinner";
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';
import { AppAsideModule, AppBreadcrumbModule, AppHeaderModule, AppFooterModule, AppSidebarModule } from '@coreui/angular';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';

import { WidgetsModule } from './core/shared/widgets/widgets.module';

import { HeaderComponent } from './pages/common/header/header.component';
import { FooterComponent } from './pages/common/footer/footer.component';
import { LeftNavBarComponent } from './pages/common/left-nav-bar/left-nav-bar.component';
import { ContainerComponent } from './pages/container/container.component';
import { PageNotFoundComponent } from './pages/common/page-not-found/page-not-found.component';
import { EncryptDecryptService } from './core/shared/service/encrypt-decrypt.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};
@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        HeaderComponent,
        FooterComponent,
        LeftNavBarComponent,
        ContainerComponent,
    ],

    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        appRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        WidgetsModule,
        SocialLoginModule,
        AppAsideModule,
        AppBreadcrumbModule.forRoot(),
        AppHeaderModule,
        AppFooterModule,
        AppSidebarModule,
        PerfectScrollbarModule,
        IconModule,
        IconSetModule.forRoot(),
    ],

    providers: [
        AuthGuard,
        CustomHttpInterceptorProvider,
        RetryInterceptorProvider,
        EncryptDecryptService,
        IconSetService,
        
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: true,
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider('747874110030-qtahv0ljskechp5iecu8660bdmr4qhrf.apps.googleusercontent.com')
                    },
                    {
                        id: FacebookLoginProvider.PROVIDER_ID,
                        provider: new FacebookLoginProvider('48b77ace8aa612658e38060908de43ed')
                    }
                ]
            }
        },

    ],

    bootstrap: [AppComponent],

    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppModule { }