import { Component } from '@angular/core';
import {  FormsModule, NgForm  } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  


  


  onSubmit(myform : NgForm) {
    if (myform.valid) {
      console.log('Form Submitted', myform.value);
    } else {
      console.log('Form not valid');
    }
  }
}
