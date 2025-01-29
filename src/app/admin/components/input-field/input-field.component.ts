import { Component, Input } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  imports: [
    ReactiveFormsModule
  ],
  standalone: true
})
export class InputFieldComponent {
  @Input() inputId: string = '';
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() formControlName: string = '';
}
