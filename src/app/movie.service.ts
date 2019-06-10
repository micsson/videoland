import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Movie } from './movie';

import { CartItemService } from './cart-item.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient,
    private cartItemService: CartItemService) 
    { }

    private moviesUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products';  // URL to web api

    getMovies (): Observable<Movie[]> {
      console.log('Getting movies');
      return this.http.get<Movie[]>(this.moviesUrl);
      // .pipe(
      //   tap(_ => this.log('fetched movies')),
      //   catchError(this.handleError<Movie[]>('getHeroes', []))
      // );
    }
  

  getMovie(id: number): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
  return this.http.get<Movie>(url).pipe(
    tap(_ => this.log(`fetched movie id=${id}`)),
    catchError(this.handleError<Movie>(`getMovie id=${id}`))
  );
  }
  

  /** PUT: update the movie on the server */
updateMovie (movie: Movie): Observable<any> {
  return this.http.put(this.moviesUrl, movie, httpOptions).pipe(
    tap(_ => this.log(`updated movie id=${movie.id}`)),
    catchError(this.handleError<any>('updateMovie'))
  );
}

/** POST: add a new movie to the server */
addMovie (movie: Movie): Observable<Movie> {
  return this.http.post<Movie>(this.moviesUrl, movie, httpOptions).pipe(
    tap((newMovie: Movie) => this.log(`added movie w/ id=${newMovie.id}`)),
    catchError(this.handleError<Movie>('addMovie'))
  );
}

/** DELETE: delete the movie from the server */
deleteMovie (movie: Movie | number): Observable<Movie> {
  const id = typeof movie === 'number' ? movie : movie.id;
  const url = `${this.moviesUrl}/${id}`;

  return this.http.delete<Movie>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted movie id=${id}`)),
    catchError(this.handleError<Movie>('deleteMovie'))
  );
}

/* GET movies whose name contains search term */
searchMovies(term: string): Observable<Movie[]> {
  if (!term.trim()) {
    // if not search term, return empty movie array.
    return of([]);
  }
  return this.http.get<Movie[]>(`${this.moviesUrl}/?name=${term}`).pipe(
    tap(_ => this.log(`found movies matching "${term}"`)),
    catchError(this.handleError<Movie[]>('searchMovies', []))
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
