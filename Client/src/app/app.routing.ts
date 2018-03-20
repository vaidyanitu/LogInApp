import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';

const appRoutes: Routes = [
 // { path: '', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'emailconfirmation', component: EmailConfirmationComponent},
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
