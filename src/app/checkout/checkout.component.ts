import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService }  from '../movie.service';
import { CartItemService } from '../cart-item.service';
import { IOrder } from '../Interfaces/IOrder';

import * as moment from 'moment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  @Input() movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location,
    public cartItemService: CartItemService
  ) { }

  ngOnInit() {
  }
  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back();
  }

  sendOrder(): void {
    let orderRows = [];
    for (let i = 0; i < this.cartItemService.cart.length; i++) {
      orderRows.push({ productId: this.cartItemService.cart[i].movie.id, amount: this.cartItemService.cart[i].quantity});
      
    }

    const companyId = 26;

    let date = moment().format('YYYY-MM-DDTHH:mm:ss');

    let order: IOrder = {
      id: 0,
      created: date,
      createdBy: 'Micke',
      totalPrice: 200,
      status: 0,
      paymentMethod: 'card',
      orderRows: orderRows,
      companyId: companyId,
    }

    this.movieService.addOrder(order).subscribe(result => {
      console.log(result);
    });
  }
}
