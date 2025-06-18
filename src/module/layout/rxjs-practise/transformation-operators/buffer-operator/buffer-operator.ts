import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { buffer, interval, Observable, scan, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-buffer-operator',
  imports: [CommonModule],
  templateUrl: './buffer-operator.html',
  styleUrl: './buffer-operator.css'
})
export class BufferOperator implements OnDestroy {
  data!:string[];
  observable$ = new Observable<string>((observer)=>{
    setTimeout(() => {observer.next("sita");      }, 0);
    setTimeout(() => {observer.next("gita");     }, 1000);
    setTimeout(() => {observer.next("rita");}, 2000);
    setTimeout(() => {observer.next("jinta");      }, 3000);
    setTimeout(() => {observer.next("pinta");      }, 4000);
    setTimeout(() => {observer.next("sima");      }, 5000);
    setTimeout(() => {observer.next("rima");      }, 6000);
  });
  destroy$ = new Subject<number>();
  notifier$ = interval(2000).pipe(takeUntil(this.destroy$));
  constructor(){}
  ngOnInit(): void {
    this.observable$
    .pipe(
      buffer(this.notifier$),      
    )
    .subscribe((data: any)=>{
      console.log("data:", data)
      this.data = data;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(1);
    this.destroy$.complete();
  }
}
