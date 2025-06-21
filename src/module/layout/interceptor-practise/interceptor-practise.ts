import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { exhaustMap, fromEvent, Observable } from 'rxjs';
import { network_token, NetworkService } from '../../../common/service/network.service';

@Component({
  selector: 'app-interceptor-practise',
  imports: [],
  templateUrl: './interceptor-practise.html',
  styleUrl: './interceptor-practise.css'
})
export class InterceptorPractise implements AfterViewInit {
  @ViewChild("apiButton") buttonEle!: ElementRef<HTMLElement>;
  constructor(@Inject(network_token) private networkService:NetworkService){

  }
  ngAfterViewInit(): void {
    fromEvent(this.buttonEle.nativeElement, "click")
    .pipe(
      exhaustMap(()=>(
        this.networkService.get("api/Account/test")
      ))
    )
    .subscribe({
      next: ()=> alert("please check network call!"),
      error: ()=>  alert("please check network call!"),
      
    });
  }
 }
