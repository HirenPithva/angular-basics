import { AfterViewChecked, Component, Inject, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Child } from './child/child';
import { FormsModule } from '@angular/forms';
import { JUNCTION_SERVICE, junctionService } from '../../../../common/service/junction.service'

@Component({
  selector: 'parent',
  imports: [Child, FormsModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent implements AfterViewChecked, OnInit {

  @ViewChildren(Child) child_ref!:QueryList<Child>;
  
  // constructor(private junction: junctionService){}
  constructor(@Inject(JUNCTION_SERVICE) private junction: junctionService){}

  ngOnInit(): void {
    this.junction.onSendMessage.subscribe((msg:string)=>{
      this.service_msg = msg;
    });
  }

  data:string = "sending the data from parent!";
   message!: string;
   child_one_message!: string;
   child_two_message!: string;
   service_msg!: string;
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
