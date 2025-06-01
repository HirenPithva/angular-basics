import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'child-change-detection',
  imports: [],
  templateUrl: './child-change-detection.html',
  styleUrl: './child-change-detection.css'
})
export class ChildChangeDetection {
  constructor(){
    console.log("--> constructor child calls")
    //console.log("--> view template:", document.getElementsByClassName("content"))
    // console.log("temp:", this.temp);
    // this.temp = "hello from constructor";
  }

  ngOnInit(): void {
    console.log("--> onInit child calls")
    //console.log("--> view template:", document.getElementsByClassName("content"))
    // console.log("temp:", this.temp);
    // this.temp = "hello from onInit";
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("--> onChanges child calls")
    //console.log("--> view template:", document.getElementsByClassName("content"))
    // console.log("temp:", this.temp);
    // this.temp = "hello from ngOnChanges";

  }

  ngDoCheck(): void {
    console.log("--> DoCheck child calls")
    //console.log("--> view template:", document.getElementsByClassName("content"))
  //   console.log("temp:", this.temp);
  //  // this.temp = "hello from ngDoCheck";
  //  console.log("tempEl:", document.getElementById("tempEl")?.innerText);

  }

  ngAfterContentInit(): void {
    console.log("--> afterContentInit child calls")
    //console.log("--> view template:", document.getElementsByClassName("content"))
    // console.log("temp:", this.temp);
    // this.temp = "hello from ngAfterContentInit";
  }

  ngAfterContentChecked(): void {
    console.log("--> AfterContentChecked child calls")
    //console.log("--> view template:", document.getElementsByClassName("content"))
  //   console.log("temp:", this.temp);
  //  // this.temp = "hello from ngAfterContentChecked";
  //  console.log("tempEl:", document.getElementById("tempEl")?.innerText);
  }

  ngAfterViewInit(): void {
    console.log("--> AfterViewInit child calls")
    //console.log("--> view template:", document.getElementsByClassName("content"))
    // console.log("temp:", this.temp);
    // this.temp = "hello from ngAfterViewInit";
    // console.log("view checked tempEl:", document.getElementById("tempEl")?.innerText);

  }

  ngAfterViewChecked(): void {
    console.log("--> AfterViewChecked child calls")
    //console.log("--> view template:", document.getElementsByClassName("content"))
    // console.log("temp:", this.temp);
    //  this.temp = "hello from ngAfterViewChecked";
    //  console.log("view checked tempEl:", document.getElementById("tempEl")?.innerText);

  }

  ngOnDestroy(): void {
    console.log("--> onDestroy child calls")
    //console.log("--> view template:", document.getElementsByClassName("content"))
    // console.log("temp:", this.temp);
    // this.temp = "hello from ngOnDestroy";

  }

}
