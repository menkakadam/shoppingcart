import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgRedux, NgReduxModule } from 'ng2-redux';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { BookComponent } from './book/book.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { CommanService } from './shared/comman.service';
import { HeaderComponent } from './shared/header/header.component';

import { IAppState, rootReducer, INITIAL_STATE } from './store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    BookComponent,
    BookdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [CommanService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState> ) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
 }
