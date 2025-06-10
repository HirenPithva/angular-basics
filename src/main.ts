import 'zone.js';
import {ApplicationConfig, Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import { TwoWayBindingTechnique } from './two-way-binding/two-way-binding-technique/two-way-binding-technique';
import { ComponentDirective } from './directive/component-directive/component-directive';
import { Parent } from './data-tranfer/parent/parent';
import { ChangeDetectionCycle } from './change-detection/change-detection-cycle/change-detection-cycle';
import { RootComponent } from './view-encapsulation/root-component/root-component';
import { JUNCTION_SERVICE, junctionService } from './common/service/junction.service';
import { RegisterComponent } from "./component/account/register-component/register.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: "",
  templateUrl:"app.template.html",
  imports: [
    TwoWayBindingTechnique,
    Parent,
    ChangeDetectionCycle,
    RootComponent,
    RegisterComponent,
    ComponentDirective,
    RegisterComponent
]
})
export class App {
  name = 'Angular';
  onInput(event: Event){
    this.name = (event as any).target.value;
  }

}

// bootstrapApplication(App,{providers: [{provide: junctionService, useClass: junctionService }]});
bootstrapApplication(App,{providers: [{provide: JUNCTION_SERVICE, useClass: junctionService }]});
