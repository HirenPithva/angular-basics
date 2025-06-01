import 'zone.js';
import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import { TwoWayBindingTechnique } from './two-way-binding/two-way-binding-technique/two-way-binding-technique';
import { ComponentDirective } from './directive/component-directive/component-directive';
import { Parent } from './data-tranfer/parent/parent';
import { ChangeDetectionCycle } from './change-detection/change-detection-cycle/change-detection-cycle';
import { RootComponent } from './view-encapsulation/root-component/root-component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: "",
  templateUrl:"app.template.html",
  imports:[TwoWayBindingTechnique, Parent,ChangeDetectionCycle, RootComponent,ComponentDirective]
})
export class App {
  name = 'Angular';
  onInput(event: Event){
    this.name = (event as any).target.value;
  }
}

bootstrapApplication(App);
