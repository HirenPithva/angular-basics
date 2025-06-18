import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'node-component',
  imports: [],
  templateUrl: './node-component.html',
  styleUrl: './node-component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NodeComponent {
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
