import { Component } from '@angular/core';
import { User } from '../../model/user'; // Import the User interface if it's in a separate file

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  user: User = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    console.log('Form submitted:', this.user);
  }
}
