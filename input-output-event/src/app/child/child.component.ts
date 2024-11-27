import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input()
  childMessage!: string;

  @Output() messageEvent = new EventEmitter<string>();
  
  sendMessage() {
    this.messageEvent.emit('Hello from child');
  }

  @Input() childString!: string;
  @Output('ngModelChange') childStringMessage = new EventEmitter<string>();

  onInputChange($event: string) {
    this.childStringMessage.emit($event);
  }
}
