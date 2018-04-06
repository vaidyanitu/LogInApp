import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import{AboutComponent} from './about/about.component';
import {ItunesSearchComponent} from './itunes-search/itunes-search.component';
import {YouTubeSearchComponent} from './youtube-search/youtube-search.component';
import { TestComponent} from './test/test.component';

const appRoutes: Routes = [
 // { path: '', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'emailconfirmation', component: EmailConfirmationComponent },
  { path: 'resetpassword', component: PasswordResetComponent },
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {path:'about',component:AboutComponent},
  {path:'itunes',component:ItunesSearchComponent},
  {path:'youtube',component:YouTubeSearchComponent},
  {path:'test', component:TestComponent},
  //otherwise redirect to home
  {path:'**',redirectTo:''}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
