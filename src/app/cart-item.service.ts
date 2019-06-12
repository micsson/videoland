import { Injectable } from '@angular/core';
import { CartItem, Movie } from './movie';
 
@Injectable({
  providedIn: 'root',
})
export class CartItemService {
  cart: CartItem[] = [];
 
  add(cartItem: Movie) {
    let added = false;
    for (let i = 0; i < this.cart.length; i++) {
      if(cartItem.id === this.cart[i].movie.id){
        this.cart[i].quantity++
        added = true;
        console.log(this.cart);
      }
    }

    if(added === false){
      this.cart.push({ movie: cartItem, quantity: 1});
      console.log(this.cart);
    }
  } 

  clear() {
    this.cart = [];
  }

  
    
}