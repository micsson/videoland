import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Movie } from './movie';

import { CartItemService } from './cart-item.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

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
      .pipe(
        tap(_ => this.log('fetched movies')),
        catchError(this.handleError<Movie[]>('getHeroes', []))
      );
    }

  getMovie(id: number): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
  return this.http.get<Movie>(url).pipe(
    tap(_ => this.log(`fetched movie id=${id}`)),
    catchError(this.handleError<Movie>(`getMovie id=${id}`))
  );
  }

  /** PUT: update the hero on the server */
updateMovie (movie: Movie): Observable<any> {
  return this.http.put(this.moviesUrl, movie, httpOptions).pipe(
    tap(_ => this.log(`updated movie id=${movie.id}`)),
    catchError(this.handleError<any>('updateMovie'))
  );
}

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  private log(cartItem: string) {
    this.cartItemService.add(`MovieService: ${cartItem}`);
  }
}
