import { createComponent } from '@angular/compiler/src/core';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { AuthGuard } from './guards/auth.guard';
import { RoutingGuard } from './guards/routing.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [  
  {
    path:"",
    component: NavigationComponent,
    canActivate:[RoutingGuard],
    children:[
      {
        path : "login",
        component: LoginComponent,
      },
      {
        path:"home",
        component: HomeComponent,
        canActivate:[AuthGuard]
      },
      {
        path:"register",
        component: RegisterComponent
      },
      {
        path:"create-book",
         component: CreateBookComponent
      }
    ] 
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
