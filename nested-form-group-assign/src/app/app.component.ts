import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nested-form-group-assign';
  userForm!: FormGroup;

  constructor(private builder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.userForm = this.builder.group({
      personDetails: this.builder.group({
        name: [''],
        email: [''],
        password: [''],
      }),
      address: this.builder.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      })
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }


}
