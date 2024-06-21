import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styles: [],
})
export class PrimaryButtonComponent {
  @Input() title: string = '';
  @Output() onClick = new EventEmitter();
}
