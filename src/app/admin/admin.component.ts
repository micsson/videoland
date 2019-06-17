import { Component, OnInit, } from '@angular/core';
import { IOrder } from '../Interfaces/IOrder'

import { MovieService }  from '../movie.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  ordersList: IOrder[];
  
  constructor(
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this.movieService.getOrders().subscribe(result =>{
      this.ordersList = result;
      console.log(this.ordersList);
    });
  }

  // getOrders(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.movieService.getMovie(id)
  //     .subscribe(movie => this.movie = movie);
  // }

  // deleteOrder(): void{
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.movieService.deleteOrder(id)
  //     .subscribe(movie => this.movie = movie);
  // }
}
