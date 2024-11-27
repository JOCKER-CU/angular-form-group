import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  enrollForm!: FormGroup;
  minDate = '1920-01-01';
  maxDate = '2019-01-01';

  courseOptions: string[] = [
    'Java Programming',
    'HTML/CSS',
    'JavaScript',
    'SQL',
    'Python',
    'Android',
    'Flutter',
    'Swift Programming',
    'PHP'
  ];

  durationOptions: string[] = [
    '1 month',
    '2 months',
    '3 months',
    '4 months',
    '5 months',
    '6 months'
  ];

  paymentOptions: string[] = [
    'Credit Card', 'Debit Card', 'PayPal',
    'KBZ-Pay',
    'Wave Money',
    'AYA-Pay',
    'CB-Pay',
    'True Money'
  ];

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.enrollForm = this.builder.group({
      studentInfo: this.builder.group({
        name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
        courseInfo: this.builder.group({
          courseName: ['', Validators.required],
          duration: ['', Validators.required]
        }),
        paymentInfo: this.builder.group({
          paymentType: ['', Validators.required],
          accountNo: ['', [Validators.required, Validators.pattern(/^[0-9]{10,12}$/)]]
        })
      })
    });
  }

  onSubmit() {
    if (this.enrollForm.valid) {
      console.log(this.enrollForm.value);
      this.enrollForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
