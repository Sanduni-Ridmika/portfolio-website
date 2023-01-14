import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeserviceComponent } from './components/pages/homeservice/homeservice.component';

const routes: Routes = [
  {path:'',component:HomeserviceComponent}, //empty string means home page of the angular module
  {path:'search/:searchTerm', component:HomeserviceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
