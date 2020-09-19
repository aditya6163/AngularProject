import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { LogindashboardComponent } from './logindashboard/logindashboard.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"log",component:LoginComponent},
  {path:"sign",component:SignupComponent},
  {path:"cart",component:CartComponent},
  {path:"userd",component:LogindashboardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
