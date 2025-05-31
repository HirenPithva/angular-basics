import { Component } from '@angular/core';
import { StyleDirective } from '../attribute/style.directive';
import { MaskDirective } from '../attribute/mask.directive';

@Component({
  selector: 'component-directive',
  imports: [StyleDirective, MaskDirective],
  templateUrl: './component-directive.html',
  styleUrl: './component-directive.css'
})
export class ComponentDirective {
  pattern: string = "";
  onChange(event: Event){
    this.pattern =( event.target as HTMLInputElement).value;
    console.log("this.pattern:", this.pattern);
  }
}
