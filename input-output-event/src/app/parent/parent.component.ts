import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  parentMessage = "Hello from Parent!";
  message!: string;

  receiveMessage($event: string) {
    this.message = $event;
  }
}
