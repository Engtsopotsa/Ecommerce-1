import { Component } from '@angular/core';
import { CartItem } from '../../model/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: CartItem[] = [
    { id: 1, name: 'Product 1', price: 10, quantity: 1 },
    { id: 2, name: 'Product 2', price: 20, quantity: 2 },
    { id: 3, name: 'Product 3', price: 15, quantity: 1 }
  ];

  incrementQuantity(item: CartItem) {
    item.quantity++;
  }

  decrementQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  getSubtotal() {
    let subtotal = 0;
    for (let item of this.cartItems) {
      subtotal += item.price * item.quantity;
    }
    return subtotal;
  }

  getTax() {
    return this.getSubtotal() * 0.08; // Assuming a tax rate of 8%
  }

  getTotal() {
    return this.getSubtotal() + this.getTax();
  }
}

