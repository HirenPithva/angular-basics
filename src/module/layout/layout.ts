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
  formClicked =  ()=>{
    this.isformClick = !this.isformClick;
  }

  temp(){
    console.log("mouse enter")
  }
}