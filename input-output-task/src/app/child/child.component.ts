import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() value = 0;
  @Output() iValue = new EventEmitter<number>();
  sendValueToParint() {
    this.iValue.emit(this.value);
  }
}
