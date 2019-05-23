import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root',
})
export class CartItemService {
  cart: string[] = [];
 
  add(cartItem: string) {
    this.cart.push(cartItem);
  }
 
  clear() {
    this.cart = [];
  }
}