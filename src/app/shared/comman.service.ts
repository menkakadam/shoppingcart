import { Injectable } from '@angular/core';
import { bookList, BookList } from './comman';

@Injectable({
  providedIn: 'root'
})
export class CommanService {
  bookList = bookList;
  constructor() { }
  getProduct() {
    return this.bookList;
  }
  getDataById(id) {
    return this.bookList.find(x => x.id === id);
  }
}
