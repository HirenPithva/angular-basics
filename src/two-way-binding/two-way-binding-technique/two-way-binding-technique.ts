import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'two-way-binding-technique',
  imports: [FormsModule],
  templateUrl: './two-way-binding-technique.html',
  styleUrl: './two-way-binding-technique.css'
})
export class TwoWayBindingTechnique {
  email!: string;
}
