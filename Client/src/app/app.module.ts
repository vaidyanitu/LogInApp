import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AppConfig } from './app.config';
import { AppRoutingModule } from './app.routing';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './service/alert.service';
import { UserService } from './service/user.service';
import { AuthenticationService } from './service/authentication.service';
import { ShareduserService } from './service/shareduser.service';
import { EmailService } from './service/email.service';

import { AuthGuard } from './guard/auth.guard';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AlertComponent,
    EmailConfirmationComponent,
    PasswordResetComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [AlertService, UserService, AppConfig, AuthGuard, AuthenticationService, ShareduserService, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
