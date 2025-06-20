import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-async-creational-opeartor',
  imports: [CommonModule],
  templateUrl: './async-creational-opeartor.html',
  styleUrl: './async-creational-opeartor.css'
})
export class AsyncCreationalOpeartor implements OnInit{
  ofResult:any[] = [];
  fromResult:any[] = [];

  ngOnInit(): void {    
    of([123, 123, 12], 123, 123)
    .subscribe((data)=> {
      console.log("of data",data);
      this.ofResult.push(data);
    })

    from([[123, 123, 12], 123, 123])
    .subscribe((data)=> {
      console.log("of data",data);
      this.fromResult.push(data);

    }) 
  }
}
