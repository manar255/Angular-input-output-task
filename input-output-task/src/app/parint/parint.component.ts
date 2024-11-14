import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { SChildComponent } from '../s-child/s-child.component';

@Component({
  selector: 'app-parint',
  standalone: true,
  imports: [ChildComponent,SChildComponent],
  templateUrl: './parint.component.html',
  styleUrl: './parint.component.css'
})
export class ParintComponent {
i=5
m=0
arr=[1,2,3,4,5]
receiveData(data:number){
this.m=data
}
}
