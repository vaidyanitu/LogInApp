import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AppConfig } from './app.config';
import { AppRoutingModule } from './app.routing';
import {DataTablesModule} from 'angular-datatables';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './service/alert.service';
import { UserService } from './service/user.service';
import { AuthenticationService } from './service/authentication.service';
import { ShareduserService } from './service/shareduser.service';
import { EmailService } from './service/email.service';

import {CheckComponent} from './itunes-search/check.component';

import { AuthGuard } from './guard/auth.guard';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


import {SearchService} from './service/search.service';
import { ItunesSearchComponent } from './itunes-search/itunes-search.component';
import { DataComponent } from './data/data.component';
import { AboutComponent } from './about/about.component';

import {youTubeSearchInjectables} from './youtube-search/youtube-search.injectables';
import {YouTubeSearchComponent} from './youtube-search/youtube-search.component';
import {SearchResultComponent} from './youtube-search/search-result/search-result.component';
import {SearchBoxComponent} from './youtube-search/search-box.component';
import { YoutubePipe } from './youtube.pipe';
import { TestComponent } from './test/test.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginComponent } from './social-login/social-login.component';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("774590296620-bkeg0p6ojr85ljrl0vmsss8j9l9jos8h")
  }
]);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AlertComponent,
    EmailConfirmationComponent,
    PasswordResetComponent,
    ForgotPasswordComponent,
    ItunesSearchComponent,
    CheckComponent,
    DataComponent,
    AboutComponent,
    YouTubeSearchComponent,
    SearchResultComponent,
    SearchBoxComponent,
    YoutubePipe,
    TestComponent,
    SocialLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DataTablesModule,
    BrowserAnimationsModule,
    SocialLoginModule
  ],
  providers: [AlertService, UserService, AppConfig, AuthGuard, youTubeSearchInjectables,
    AuthenticationService, ShareduserService, EmailService, SearchService,
    {provide:AuthServiceConfig,useFactory:provideConfig}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }


