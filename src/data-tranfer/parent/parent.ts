import { AfterViewChecked, Component, QueryList, ViewChildren } from '@angular/core';
import { Child } from './child/child';
import { FormsModule } from '@angular/forms';
import { elementAt } from 'rxjs';

@Component({
  selector: 'parent',
  imports: [Child, FormsModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent implements AfterViewChecked {
  @ViewChildren(Child) child_ref!:QueryList<Child>;
   data:string = "sending the data from parent!";
   message!: string;
   child_one_message!: string;
   child_two_message!: string;
   receivedMessage(event:string){
    this.message = event;
   }
  ngAfterViewChecked(): void {
    this.child_ref.forEach((element, index) => {
      element.messageSubject$.subscribe((msg: string)=>{
        if(index == 0){
          this.child_one_message = msg;
        }
        else{
          this.child_two_message = msg;
        }
      })
    });
  }
}
