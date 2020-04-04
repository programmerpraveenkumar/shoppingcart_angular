import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CheckoutComponent} from './checkout/checkout.component';
import {IndexComponent} from './index/index.component';
const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'checkout', component: CheckoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
