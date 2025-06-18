import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NodeComponent } from './node-component/node-component';

@Component({
  selector: 'root-component',
  imports: [NodeComponent],
  templateUrl: './root-component.html',
  styleUrl: './root-component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class RootComponent implements OnInit {
  encapsulation!: string;
  ngOnInit(): void {

    console.log((this.constructor as any).ɵcmp.encapsulation);
    if((this.constructor as any).ɵcmp.encapsulation == ViewEncapsulation.Emulated) 
      this.encapsulation = "Emulated";
    if((this.constructor as any).ɵcmp.encapsulation == ViewEncapsulation.None) 
      this.encapsulation = "None";
    if((this.constructor as any).ɵcmp.encapsulation == ViewEncapsulation.ShadowDom) 
      this.encapsulation = "ShadowDom";
  }
}
