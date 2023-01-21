import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { HomeserviceComponent } from './components/pages/homeservice/homeservice.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { OrderTrackPageComponent } from './components/pages/order-track-page/order-track-page.component';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { ServiceviewPageComponent } from './components/pages/serviceview-page/serviceview-page.component';

//adding each pages
const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'service-page',component:HomeserviceComponent}, //empty string means home page of the angular module
  {path:'search/:searchTerm', component:HomeserviceComponent},
  {path:'tag/:tag', component:HomeserviceComponent},
  {path:'service/:id', component:ServiceviewPageComponent},
  {path:'cart-page', component: CartPageComponent},
  {path:'login', component: LoginPageComponent},
  {path:'register', component: RegisterPageComponent},
  {path:'checkout', component: CheckoutPageComponent, canActivate:[AuthGuard]},
  {path:'payment', component: PaymentPageComponent, canActivate:[AuthGuard]},
  {path:'track/:orderId', component: OrderTrackPageComponent, canActivate:[AuthGuard]},
  {path:'contact', component: ContactComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
