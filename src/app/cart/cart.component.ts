import { Component, OnInit } from '@angular/core';
import { CommanService } from '../shared/comman.service';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';
import { DECREMENT } from '../actions';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  bookList: any = [];
  filterBookById: any = [];
  ids: any = [];
  Total: number = 0;
  constructor(private common: CommanService, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookList = this.common.getProduct();
    this.ngRedux.subscribe(() => { })
    this.ids = this.ngRedux.getState().ids;
    const id = Array.from(new Set(this.ids));
    for (let i = 0; i < id.length; i++) {
      const data = this.bookList.find(x => x.id === id[i]);
      this.filterBookById.push(data);
    }
    this.filterBookById.filter(e => e.quentity = 0)
    this.ids.forEach(item => {
      this.filterBookById.filter(e => { if (e.id === item) { e.quentity += 1 } })
    });
    let total = 0;
    for (let i = 0; i < this.filterBookById.length; i++) {
      total += this.filterBookById[i].quentity * this.filterBookById[i].price;
    }
    this.Total = total;
  }

  deleteItem(id: number) {
    this.ngRedux.dispatch({ type: DECREMENT, id: id })
    var index = this.filterBookById.map(x => { return x.id; }).indexOf(id);
    this.filterBookById.splice(index, 1);
  }
}
