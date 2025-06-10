import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JUNCTION_SERVICE, junctionService } from '../../common/service/junction.service';

@Component({
  selector: 'two-way-binding-technique',
  imports: [FormsModule],
  templateUrl: './two-way-binding-technique.html',
  styleUrl: './two-way-binding-technique.css'
})
export class TwoWayBindingTechnique {

  constructor(@Inject(JUNCTION_SERVICE) private junction: junctionService){}

  email!: string;
  onEmailEnter(event: Event){
    this.junction.onSendMessage.emit((event.target as HTMLInputElement).value);
  }
}
