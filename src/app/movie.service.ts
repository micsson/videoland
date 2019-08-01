import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Movie, CartItem } from './movie';

import { CartItemService } from './cart-item.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { IOrder } from './Interfaces/IOrder';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient,
    private cartItemService: CartItemService) 
    { }

    private moviesUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products';  // URL to web api
    // private moviesUrl = 'api/movies';
    private ordersUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=26';

  getMovies(): Observable<Movie[]> {
    console.log('Getting movies');
    return this.http.get<Movie[]>(this.moviesUrl)
    .pipe(
      tap(_ => this.log('fetched movies')),
      catchError(this.handleError<Movie[]>('getMovies', []))
    );
  }

  getOrders(): Observable<IOrder[]> {
    console.log('Getting orders');
    return this.http.get<IOrder[]>(this.ordersUrl)
    .pipe(
      tap(_ => this.log('fetched orders')),
      catchError(this.handleError<IOrder[]>('getOrders', []))
    );
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
  return this.http.put(this.moviesUrl, movie).pipe(
    tap(_ => this.log(`updated movie id=${movie.id}`)),
    catchError(this.handleError<any>('updateMovie'))
  );
}

/** POST: add a new order to the server */
addOrder (order: IOrder): Observable<IOrder> {
  return this.http.post<IOrder>(this.ordersUrl, order).pipe(
    tap((newOrder: IOrder) => this.log(`added order w/ id=${newOrder.id}`)),
    catchError(this.handleError<IOrder>('addOrder'))
  );
}


/** DELETE: delete the order from the server */
deleteOrder (order: IOrder | number): Observable<number> {
  const id = typeof order === 'number' ? order : order.id;
  const url = `${this.ordersUrl}/${id}`;

  return this.http.delete<number>(url).pipe(
    tap(_ => this.log(`deleted order id=${id}`)),
    catchError(this.handleError<number>('deleteOrder'))
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
    // this.cartItemService.add(`MovieService: ${cartItem}`);
  }
}
