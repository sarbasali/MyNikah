import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/auth/login/login.component';
import { SignUpComponent } from './component/auth/sign-up/sign-up.component';

const routes: Routes = [
  {path :'' ,component:HomeComponent},
  {path :'home' , component:HomeComponent},
  {path :'login' , component:LoginComponent},
  {path :'signup' , component:SignUpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
