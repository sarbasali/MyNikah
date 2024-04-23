import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/auth/login/login.component';
import { SignUpComponent } from './component/auth/sign-up/sign-up.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path :'' ,component:HomeComponent},
  {path :'home' , component:HomeComponent},
  {path :'login' , component:LoginComponent},
  {path :'signup' , component:SignUpComponent},
  {path : 'register' , component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
