import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IOrder } from '../Interfaces/IOrder'

import { MovieService }  from '../movie.service';
import { CartItemService } from '../cart-item.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  ordersList: IOrder;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location,
    private cartService: CartItemService
  ) { }

  ngOnInit(): void {
    this.movieService.getOrders(this.ordersList).subscribe(result =>{
      this.ordersList = result;
      console.log(this.ordersList);
    });
  }
  getOrders(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  deleteOrder(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.deleteOrder(id)
      .subscribe(movie => this.movie = movie);
  }
}
