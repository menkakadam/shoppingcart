import { Injectable } from '@angular/core';
import { BookList } from './comman';

@Injectable({
  providedIn: 'root'
})
export class CommanService {
  bookList: BookList[] = [{
    id: 1,
    name: 'Prashad Cooking with Indian Masters',
    img: 'images.jpg',
    price: 200,
    originalPrice: 300,
    shortDetail: 'Boxset Of 20 Borad Books F5or Kids (Viertical Design) Borad Books -25-jully-2019',
    fulletail: 'My First Learning Library : Boxset Of 20 Borad Books F5or Kids (Viertical Design) Borad Books -25-jully-2019'
  }];
  constructor() { }
  getProduct() {
    return this.bookList;
  }
  getDataById(id) {
    return this.bookList.find(x => x.id === id);
  }
}
