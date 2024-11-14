import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParintComponent } from './parint/parint.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ParintComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'input-output-task';
}
