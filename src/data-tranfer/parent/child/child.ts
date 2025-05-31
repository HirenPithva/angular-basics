import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'child',
  imports: [FormsModule],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  @Input() data!:string;
  @Input() title!:string;
  @Output() sendMessage:EventEmitter<string> = new EventEmitter<string>();
  messageSubject$ = new Subject<string>();
  message!:string;
  onInput(event:Event){
    this.sendMessage.emit(this.message);
    this.messageSubject$.next(this.message);
  }
}
