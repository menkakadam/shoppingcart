import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommanService } from '../shared/comman.service';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';
import { INCREMENT } from '../actions';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.sass']
})
export class BookdetailComponent implements OnInit {
  id: number;
  details: any;
  constructor(private route: ActivatedRoute,
    private commanService: CommanService, private ngRedux: NgRedux<IAppState>) {
      ngRedux.subscribe(() => {
        // console.log(ngRedux.getState());
      })
     }

  ngOnInit() {
    this.id = Number(this.route.snapshot.queryParams.bookid);
    console.log(this.id);
    if (this.id > 0) {
      this.getDataById();
    }
  }

  getDataById() {
    this.details = this.commanService.getDataById(this.id);
  }
  addToCart(id){
    this.ngRedux.dispatch({ type: INCREMENT, id: id })
  }
}
