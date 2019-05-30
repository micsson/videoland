import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Movie } from './movie';

import { CartItemService } from './cart-item.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient,
    private cartItemService: CartItemService) { }
    private moviesUrl = 'api/movies';  // URL to web api

    getMovies (): Observable<Movie[]> {
      return this.http.get<Movie[]>(this.moviesUrl)
    }

  getMovie(id: number): Observable<Movie> {
    // TODO: add to cart _after_ fetching the movie
    this.cartItemService.add(`MovieService: fetched movie id=${id}`);
    return of(MOVIES.find(movie => movie.id === id));
  }

  private log(cartItem: string) {
    this.cartItemService.add(`MovieService: ${cartItem}`);
  }
}
