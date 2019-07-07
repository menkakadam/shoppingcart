import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { BookComponent } from './book/book.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';

const routes: Routes = [
  {path: '', redirectTo: 'book', pathMatch: 'full'},
  {path: 'book', component: BookComponent },
  {path: 'cart', component: CartComponent},
  {path: 'book/bookdetail', component: BookdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
