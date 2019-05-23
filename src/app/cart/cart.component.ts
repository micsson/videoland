import { Component, OnInit } from '@angular/core';
import { CartItemService } from '../cart-item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cartItemService: CartItemService) { }

  ngOnInit() {
  }

}
