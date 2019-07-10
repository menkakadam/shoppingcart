import { Component, OnInit } from '@angular/core';
import { CommanService } from '../shared/comman.service';
import { Router } from '@angular/router';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';
import { INCREMENT } from '../actions';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  bookList: any = [];
  constructor(private common: CommanService, private router: Router,
    private ngRedux: NgRedux<IAppState>) {
    ngRedux.subscribe(() => {
      // console.log(ngRedux.getState());
    })
  }

  ngOnInit() {
    this.getBooks();
  }
  getBooks() {
    this.bookList = this.common.getProduct();
  }
  Details(item) {
    this.router.navigate(['/book/bookdetail'], { queryParams: { bookid: item.id } });
  }
  addToCart(id) {
    this.ngRedux.dispatch({ type: INCREMENT, id: id })
  }
}
