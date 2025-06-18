import { Component } from '@angular/core';
import { network_token, NetworkService } from '../../../../../common/service/network.service';
import { Observable, scan } from 'rxjs';
import { StringTokenKind } from '@angular/compiler';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scan-operator',
  imports: [CommonModule],
  templateUrl: './scan-operator.html',
  styleUrl: './scan-operator.css'
})
export class ScanOperator {
  data!:string[];
  observable$ = new Observable<string>((observer)=>{
    setTimeout(() => {
      observer.next("sita");      
    }, 0);
    setTimeout(() => {
      observer.next("gita");      
    }, 1000);
    setTimeout(() => {
      observer.next("rita");      
    }, 2000);
    setTimeout(() => {
      observer.next("jinta");      
    }, 3000);
  });
  constructor(){}
  ngOnInit(): void {
    this.observable$
    .pipe(
      scan(
        (accumlatedVal:any, currentlyEmmitedVal:string )=>{
        console.log("Scan inboked!", "   acc:", accumlatedVal, "     cur:", currentlyEmmitedVal)
        return [...accumlatedVal, currentlyEmmitedVal];
      }, []),      
    )
    .subscribe((data: any)=>{
      console.log("data:", data)
      this.data = data;
    });
  }
}
