import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Movie } from './movie';
import { MOVIES } from './mock-movies';
import { CartItemService } from './cart-item.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private cartItemService: CartItemService) { }

  getMovies(): Observable<Movie[]> {
    // TODO: add to cart _after_ fetching the movies
    this.cartItemService.add('MovieService: fetched movies');
    return of(MOVIES);
  }

}
