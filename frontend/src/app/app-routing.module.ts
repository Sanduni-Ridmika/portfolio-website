import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { HomeserviceComponent } from './components/pages/homeservice/homeservice.component';
import { ServiceviewPageComponent } from './components/pages/serviceview-page/serviceview-page.component';

const routes: Routes = [
  {path:'',component:HomeserviceComponent}, //empty string means home page of the angular module
  {path:'search/:searchTerm', component:HomeserviceComponent},
  {path:'tag/:tag', component:HomeserviceComponent},
  {path:'service/:id', component:ServiceviewPageComponent},
  {path:'cart-page', component: CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
