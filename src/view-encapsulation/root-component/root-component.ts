import { Component, ViewEncapsulation } from '@angular/core';
import { NodeComponent } from './node-component/node-component';

@Component({
  selector: 'root-component',
  imports: [NodeComponent],
  templateUrl: './root-component.html',
  styleUrl: './root-component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class RootComponent {

}
