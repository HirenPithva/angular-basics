import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { concat, delay, merge, of } from 'rxjs';

@Component({
  selector: 'app-concat-merge-operator',
  imports: [CommonModule],
  templateUrl: './concat-merge-operator.html',
  styleUrl: './concat-merge-operator.css'
})
export class ConcatMergeOperator implements OnInit {
  a$ = of("cartoon").pipe(delay(1000))
  b$ = of("anime").pipe(delay(2000))
  constructor(){}
  mergeData: {
    data?:string,
    time?: string 
  }[]  = [];
  concatData: {
    data?:string,
    time?: string 
  }[]  = [];

  ngOnInit(): void {
    merge(this.a$,this.b$,)
      .subscribe((data:string,)=>{
        this.mergeData.push({
          data : data,
          time: (new Date()).toLocaleTimeString()
        })
      })

    concat(this.a$,this.b$)
    .subscribe((data:string,)=>{
      this.concatData.push({
        data : data,
        time: (new Date()).toLocaleTimeString()
      })
    })
  }
}
