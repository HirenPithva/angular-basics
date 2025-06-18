import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { concatMap, exhaustMap, fromEvent, map, mergeMap, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-concate-merge-exhust-operator',
  imports: [CommonModule],
  templateUrl: './switch-concate-merge-exhust-operator.html',
  styleUrl: './switch-concate-merge-exhust-operator.css'
})
export class SwitchConcateMergeExhustOperator implements AfterViewInit {
  githubTypos: string[] = ["guthub","gitrub","gitub","gitjub","git hup","git hupb","giyhub","g8thub"];
  //"githubb","gihub","gihhub","gittub","gitnub","gitgub","gitkib","gitbub",

  exhustMapData: {
    enteredTxt?:string,
    suggestion?:string[],
    time?: string 
  }[]  = [];

  concatMapData: {
    enteredTxt?:string,
    suggestion?:string[]
  }[]  = [];

  mergeMapData : {
    enteredTxt?:string,
    suggestion?:string[]
  }[]  = [];

  switchMapData : {
    enteredTxt?:string,
    suggestion?:string[]
  }[]  = [];

  getSuggestion(searchTxt:string):Observable<string[]>{
    return new Observable((observer)=>{
      setTimeout(() => {
        console.log("getSuggestion SearchTxt:", searchTxt);
        observer.next(this.githubTypos.filter((item:string)=> item.includes(searchTxt)));
        observer.complete();
      }, 3000);
    });  
  }
   
  @ViewChild("suggestion") suggestionEle!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    fromEvent(this.suggestionEle.nativeElement, 'input')
      .pipe(
        map((ele:Event)=> (ele.target as HTMLInputElement)?.value),
        exhaustMap((enteredTxt:string)=>{
          console.log("Event invoke!")
          return this.getSuggestion(enteredTxt)
                  .pipe(
                    map((suggestion: string[])=> (
                          {
                            enteredTxt:enteredTxt,
                            suggestion:suggestion,
                            time: (new Date()).toLocaleTimeString()
                          })
                      )
                    )
        })
      )
      .subscribe((data)=>{
        this.exhustMapData = [...this.exhustMapData, data];
      })

      fromEvent(this.suggestionEle.nativeElement, 'input')
      .pipe(
        map((ele:Event)=> (ele.target as HTMLInputElement)?.value),
        concatMap((enteredTxt:string)=>{
          console.log("Event invoke!")
          return this.getSuggestion(enteredTxt)
                  .pipe(
                    map((suggestion: string[])=> (
                          {
                            enteredTxt:enteredTxt,
                            suggestion:suggestion,
                            time: (new Date()).toLocaleTimeString()
                          })
                      )
                    )
        })
      )
      .subscribe((data)=>{
        this.concatMapData = [...this.concatMapData, data];
      })
      
      fromEvent(this.suggestionEle.nativeElement, 'input')
      .pipe(
        map((ele:Event)=> (ele.target as HTMLInputElement)?.value),
        mergeMap((enteredTxt:string)=>{
          console.log("Event invoke!")
          return this.getSuggestion(enteredTxt)
                  .pipe(
                    map((suggestion: string[])=> (
                          {
                            enteredTxt:enteredTxt,
                            suggestion:suggestion,
                            time: (new Date()).toLocaleTimeString()
                          })
                      )
                    )
        })
      )
      .subscribe((data)=>{
        this.mergeMapData = [...this.mergeMapData, data];
      })
      
      fromEvent(this.suggestionEle.nativeElement, 'input')
      .pipe(
        map((ele:Event)=> (ele.target as HTMLInputElement)?.value),
        switchMap((enteredTxt:string)=>{
          console.log("Event invoke!")
          return this.getSuggestion(enteredTxt)
                  .pipe(
                    map((suggestion: string[])=> (
                          {
                            enteredTxt:enteredTxt,
                            suggestion:suggestion,
                            time: (new Date()).toLocaleTimeString()
                          })
                      )
                    )
        })
      )
      .subscribe((data)=>{
        this.switchMapData = [...this.switchMapData, data];
      })
      
  }

  
}
