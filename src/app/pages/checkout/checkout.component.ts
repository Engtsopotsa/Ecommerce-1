import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  firstName!: string;
  lastName!: string;
  email!: string;
  address!: string;
  city!: string;
  state!: string;
  zip!: string;
  cardNumber!: string;
  cardExpiration!: string;
  cardCvc!: string;

  onSubmit() {
    // Handle form submission here
  }
}
