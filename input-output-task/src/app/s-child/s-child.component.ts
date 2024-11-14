import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-s-child',
  standalone: true,
  imports: [],
  templateUrl: './s-child.component.html',
  styleUrl: './s-child.component.css'
})
export class SChildComponent {
  @Input({required: true}) value = 0;
  
}
