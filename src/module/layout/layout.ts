import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, CommonModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  isformClick: boolean = false;
  isRxjsClick: boolean = false;
  isRxjsTransformationClick: boolean = false;

  formClicked =  ()=>{
    this.isformClick = !this.isformClick;
  }
  rxjsClicked = ()=>{
    this.isRxjsClick = !this.isRxjsClick;
  }
  rxjsTransformationClicked = ()=>{
    this.isRxjsTransformationClick = !this.isRxjsTransformationClick;
  }
  temp(){
    console.log("mouse enter")
  }
}