import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AsyncSubject, BehaviorSubject, fromEvent, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-operator',
  imports: [CommonModule],
  templateUrl: './subject-operator.html',
  styleUrl: './subject-operator.css'
})
export class SubjectOperator implements OnInit, AfterViewInit {

  @ViewChild("emitElement") eventEmitEle!: ElementRef<HTMLElement>;
  counter = 0;
  sub$ = new Subject<number>();
  behaviorSubject$ = new BehaviorSubject(this.counter);
  replaySubject$ = new ReplaySubject<number>(3,10000);
  asyncSubject$ = new AsyncSubject<number>();

  subData:{
    data: number[],
    Subscriptiontime: string,
    LastEmitTime: string
  } = { data: [],
    Subscriptiontime: "",
    LastEmitTime: ""};

  behaviorSubjectData:{
    data: number[],
    Subscriptiontime: string,
    LastEmitTime: string
  } = { data: [],
    Subscriptiontime: "",
    LastEmitTime: ""};

  replaySubjectData:{
    data: number[],
    Subscriptiontime: string,
    LastEmitTime: string
  } = { data: [],
    Subscriptiontime: "",
    LastEmitTime: ""};

  asyncSubjectData:{
    data: number[],
    Subscriptiontime: string,
    LastEmitTime: string
  } = { data: [],
    Subscriptiontime: "",
    LastEmitTime: ""};

  subDataSecond:{
    data: number[],
    Subscriptiontime: string,
    LastEmitTime: string
  } = { data: [],
    Subscriptiontime: "",
    LastEmitTime: ""};

  behaviorSubjectDataSecond:{
    data: number[],
    Subscriptiontime: string,
    LastEmitTime: string
  } = { data: [],
    Subscriptiontime: "",
    LastEmitTime: ""};

  replaySubjectDataSecond:{
    data: number[],
    Subscriptiontime: string,
    LastEmitTime: string
  } = { data: [],
    Subscriptiontime: "",
    LastEmitTime: ""};

  asyncSubjectDataSecond:{
    data: number[],
    Subscriptiontime: string,
    LastEmitTime: string
  } = { data: [],
    Subscriptiontime: "",
    LastEmitTime: ""};

  ngOnInit(): void {
    this.subData.Subscriptiontime = (new Date).toLocaleTimeString();
    this.behaviorSubjectData.Subscriptiontime = (new Date).toLocaleTimeString();
    this.replaySubjectData.Subscriptiontime = (new Date).toLocaleTimeString();
    this.asyncSubjectData.Subscriptiontime = (new Date).toLocaleTimeString();
    this.sub$.subscribe((data:number)=> {this.subData.data?.push(data); this.subData.LastEmitTime = (new Date).toLocaleTimeString()})
    this.behaviorSubject$.subscribe((data:number)=> {this.behaviorSubjectData.data?.push(data); this.behaviorSubjectData.LastEmitTime = (new Date).toLocaleTimeString()})
    this.replaySubject$.subscribe((data:number)=>{ this.replaySubjectData.data?.push(data); this.replaySubjectData.LastEmitTime = (new Date).toLocaleTimeString()})
    this.asyncSubject$.subscribe((data:number)=>{ this.asyncSubjectData.data?.push(data); this.asyncSubjectData.LastEmitTime = (new Date).toLocaleTimeString()})

  }

  ngAfterViewInit(): void {
    fromEvent(this.eventEmitEle.nativeElement, "click")
    .subscribe(()=>{
      this.counter++;
      this.sub$.next(this.counter);
      this.behaviorSubject$.next(this.counter);
      this.replaySubject$.next(this.counter);
      this.asyncSubject$.next(this.counter);
    })
  }

  secondSubscribe(){
    if(this.subDataSecond.data.length == 0 && 
        this.behaviorSubjectDataSecond.data.length == 0 &&
        this.replaySubjectDataSecond.data.length == 0 && 
        this.asyncSubjectDataSecond.data.length == 0
    ){
      this.subDataSecond.Subscriptiontime = (new Date()).toLocaleTimeString()
      this.behaviorSubjectDataSecond.Subscriptiontime = (new Date()).toLocaleTimeString()
      this.replaySubjectDataSecond.Subscriptiontime = (new Date()).toLocaleTimeString()
      this.asyncSubjectDataSecond.Subscriptiontime = (new Date()).toLocaleTimeString()
      this.sub$.subscribe((data:number)=> {this.subDataSecond.data.push(data); this.subDataSecond.LastEmitTime = (new Date()).toLocaleTimeString()})
      this.behaviorSubject$.subscribe((data:number)=> {this.behaviorSubjectDataSecond.data.push(data); this.behaviorSubjectDataSecond.LastEmitTime = (new Date()).toLocaleTimeString()})
      this.replaySubject$.subscribe((data:number)=>{ this.replaySubjectDataSecond.data.push(data); this.replaySubjectDataSecond.LastEmitTime = (new Date()).toLocaleTimeString()})
      this.asyncSubject$.subscribe((data:number)=>{ this.asyncSubjectDataSecond.data.push(data); this.asyncSubjectDataSecond.LastEmitTime = (new Date()).toLocaleTimeString()})
    }
  }

  completeAsync(){
    this.asyncSubject$.complete();
  }
  

  
}
