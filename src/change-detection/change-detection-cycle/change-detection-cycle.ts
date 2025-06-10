import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ChildChangeDetection } from './child-change-detection/child-change-detection';

@Component({
  selector: 'change-detection-cycle',
  imports: [ChildChangeDetection],
  templateUrl: './change-detection-cycle.html',
  styleUrl: './change-detection-cycle.css'
})
export class ChangeDetectionCycle implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {
  temp:string = "hello";
  constructor(){
   // //console.log("--> constructor parent calls")
    ////console.log("--> view template:", document.getElementsByClassName("content"))
    // //console.log("temp:", this.temp);
    // this.temp = "hello from constructor";
  }

  ngOnInit(): void {
   // //console.log("--> onInit parent calls")
    ////console.log("--> view template:", document.getElementsByClassName("content"))
    // //console.log("temp:", this.temp);
    // this.temp = "hello from onInit";
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log("--> onChanges parent calls")
    ////console.log("--> view template:", document.getElementsByClassName("content"))
    // //console.log("temp:", this.temp);
    // this.temp = "hello from ngOnChanges";

  }

  ngDoCheck(): void {
    //console.log("--> DoCheck parent calls")
    ////console.log("--> view template:", document.getElementsByClassName("content"))
  //   //console.log("temp:", this.temp);
  //  // this.temp = "hello from ngDoCheck";
  //  //console.log("tempEl:", document.getElementById("tempEl")?.innerText);

  }

  ngAfterContentInit(): void {
    //console.log("--> afterContentInit parent calls")
    ////console.log("--> view template:", document.getElementsByClassName("content"))
    // //console.log("temp:", this.temp);
    // this.temp = "hello from ngAfterContentInit";
  }

  ngAfterContentChecked(): void {
    //console.log("--> AfterContentChecked parent calls")
    ////console.log("--> view template:", document.getElementsByClassName("content"))
  //   //console.log("temp:", this.temp);
  //  // this.temp = "hello from ngAfterContentChecked";
  //  //console.log("tempEl:", document.getElementById("tempEl")?.innerText);
  }

  ngAfterViewInit(): void {
    //console.log("--> AfterViewInit parent calls")
    ////console.log("--> view template:", document.getElementsByClassName("content"))
    // //console.log("temp:", this.temp);
    // this.temp = "hello from ngAfterViewInit";
    // //console.log("view checked tempEl:", document.getElementById("tempEl")?.innerText);

  }

  ngAfterViewChecked(): void {
    //console.log("--> AfterViewChecked parent calls")
    ////console.log("--> view template:", document.getElementsByClassName("content"))
    // //console.log("temp:", this.temp);
    //  this.temp = "hello from ngAfterViewChecked";
    //  //console.log("view checked tempEl:", document.getElementById("tempEl")?.innerText);

  }

  ngOnDestroy(): void {
    //console.log("--> onDestroy parent calls")
    ////console.log("--> view template:", document.getElementsByClassName("content"))
    // //console.log("temp:", this.temp);
    // this.temp = "hello from ngOnDestroy";

  }

  changeVal(){
    this.temp = "change";

  }

}
