import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { SharedService } from './service/shared';
import { EmailService } from './service/email.service';

import { AuthGuard } from './guard/auth.guard';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AlertComponent,
    EmailConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AlertService, UserService, AppConfig, AuthGuard, AuthenticationService, SharedService, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
