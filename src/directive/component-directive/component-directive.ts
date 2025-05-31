import { Component } from '@angular/core';
import { StyleDirective } from '../attribute/style.directive';

@Component({
  selector: 'component-directive',
  imports: [StyleDirective],
  templateUrl: './component-directive.html',
  styleUrl: './component-directive.css'
})
export class ComponentDirective {

}
