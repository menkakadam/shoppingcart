import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from 'src/app/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartCount: number = 0;
  constructor(private ngRedux: NgRedux<IAppState>) {
    ngRedux.subscribe(() => {
      // console.log(ngRedux.getState());
      var store = ngRedux.getState();
      this.cartCount =  store.ids.length;
    })
  }

  ngOnInit() {

  }

}
