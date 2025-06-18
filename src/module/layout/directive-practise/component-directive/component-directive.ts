import { Component } from '@angular/core';
import { StyleDirective } from '../../../../directive/attribute/style.directive';
import { MaskDirective } from '../../../../directive/attribute/mask.directive';

@Component({
  selector: 'component-directive',
  imports: [StyleDirective, MaskDirective],
  templateUrl: './component-directive.html',
  styleUrl: './component-directive.css'
})
export class DirectiveComponent {
  pattern: string = "";
  onChange(event: Event){
    this.pattern =( event.target as HTMLInputElement).value;
    console.log("this.pattern:", this.pattern);
  }
}
