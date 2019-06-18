import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService }  from '../movie.service';
import { CartItemService } from '../cart-item.service';
import { IOrder } from '../Interfaces/IOrder';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

import * as moment from 'moment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  @Input() movie: Movie;

  email = new FormControl('');

  userInfo = new FormGroup({
    userEmail: new FormControl('', Validators.required),
    paymentOption: new FormControl('', Validators.required),
  });

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location,
    public cartItemService: CartItemService,
    private fb: FormBuilder
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
    let totalPrice = 0;

    for (let i = 0; i < this.cartItemService.cart.length; i++) {
      orderRows.push({ productId: this.cartItemService.cart[i].movie.id, amount: this.cartItemService.cart[i].quantity});
      totalPrice += this.cartItemService.cart[i].movie.price * this.cartItemService.cart[i].quantity;
    }

    const companyId = 26;

    let date = moment().format('YYYY-MM-DDTHH:mm:ss');

    let order: IOrder = {
      id: 0,
      created: date,
      createdBy: this.userInfo.value.userEmail,
      totalPrice: totalPrice,
      status: 0,
      paymentMethod: this.userInfo.value.paymentOption,
      orderRows: orderRows,
      companyId: companyId,
    }

    this.movieService.addOrder(order).subscribe(result => {
      console.log(result);
    });
  }
}
