import 'zone.js';
import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import { TwoWayBindingTechnique } from './two-way-binding/two-way-binding-technique/two-way-binding-technique';
import { ComponentDirective } from './directive/component-directive/component-directive';

@Component({
  selector: 'app-root',
  standalone: true,
  template: "",
  templateUrl:"app.template.html",
  imports:[TwoWayBindingTechnique, ComponentDirective]
})
export class App {
  name = 'Angular';
  onInput(event: Event){
    this.name = (event as any).target.value;
  }
}

bootstrapApplication(App);
