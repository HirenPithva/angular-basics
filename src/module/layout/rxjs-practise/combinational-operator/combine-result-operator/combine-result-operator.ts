import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, concatMap, exhaustMap, fromEvent, map, Observable, zip } from 'rxjs';
import { countriesWithStates, ICountryState } from './models/combine-result-operator.model';

@Component({
  selector: 'app-combine-result-operator',
  imports: [CommonModule],
  templateUrl: './combine-result-operator.html',
  styleUrl: './combine-result-operator.css'
})
export class CombineResultOperator implements AfterViewInit {

  @ViewChild('country') countryEle!: ElementRef<HTMLInputElement>;
  @ViewChild('state') stateEle!: ElementRef<HTMLInputElement>;
  isCombineLatest= false;
  iszip = false;
  result: ICountryState[] | null = null;
  combineLatestData: {
    data?:{country:string, state:string},
    time?: string 
  }[]  = [];
  zipData: {
    data?:[string,string],
    time?: string 
  }[]  = [];
  ngAfterViewInit(): void {
    let country$ = fromEvent(this.countryEle.nativeElement, "input")
      .pipe(map((e: Event)=> (e.target as HTMLInputElement)?.value));
    let state$ = fromEvent(this.stateEle.nativeElement, "input")
      .pipe(map((e: Event)=> (e.target as HTMLInputElement)?.value));
    combineLatest({country: country$, state:state$})
      .subscribe((data: {country:string, state:string})=>{
        !this.isCombineLatest && this.getResult(data)
        this.combineLatestData.push({data: data, time: (new Date()).toTimeString()})
      })
    
    zip(country$,state$)
      .subscribe((data: [string,string])=>{
        !this.iszip && this.getResultForzip(data);
        this.zipData.push({data: data, time: (new Date()).toTimeString()})
      })
  }
  getResult = (data: {country:string, state:string})=>{
    this.result = countriesWithStates
                  .filter((item)=> item.country.toLowerCase().includes(data.country.toLowerCase()))
                  .map((item)=> ({
                    country:item.country, 
                    state: item.states.filter((stateItem)=> stateItem.toLowerCase().includes(data.state.toLowerCase()))
                  }))
  }

  getResultForzip = (data: [string, string])=>{
    this.result = countriesWithStates
                  .filter((item)=> item.country.toLowerCase().includes(data[0].toLowerCase()))
                  .map((item)=> ({
                    country:item.country, 
                    state: item.states.filter((stateItem)=> stateItem.toLowerCase().includes(data[1].toLowerCase()))
                  }))
  }
  switchOperator(para:string){
    switch(para){
      case "CombineLatest":
        this.isCombineLatest = !this.isCombineLatest; 
        this.iszip = false;
        break;
      case "zip":
        this.iszip = !this.iszip;
        this.isCombineLatest = false;
        break;
    }
  }
}
