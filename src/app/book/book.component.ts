import { Component, OnInit } from '@angular/core';
import { CommanService } from '../shared/comman.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  bookList: any = [];
  constructor( private common: CommanService, private router: Router ) { }

  ngOnInit() {
    this.getBooks();
  }
  getBooks(){
    this.bookList = this.common.getProduct();
  }
  Details(item) {
    this.router.navigate(['/book/bookdetail'], {queryParams: {bookid: item.id}});
  }
  addToCart(item: any, i) {

  }
}
