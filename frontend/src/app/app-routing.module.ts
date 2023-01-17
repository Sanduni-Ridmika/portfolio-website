import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { HomeserviceComponent } from './components/pages/homeservice/homeservice.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ServiceviewPageComponent } from './components/pages/serviceview-page/serviceview-page.component';

//adding each pages
const routes: Routes = [
  {path:'',component:HomeserviceComponent}, //empty string means home page of the angular module
  {path:'search/:searchTerm', component:HomeserviceComponent},
  {path:'tag/:tag', component:HomeserviceComponent},
  {path:'service/:id', component:ServiceviewPageComponent},
  {path:'cart-page', component: CartPageComponent},
  {path:'login', component: LoginPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
