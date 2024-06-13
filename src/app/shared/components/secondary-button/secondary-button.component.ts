import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  templateUrl: './secondary-button.component.html',
  styles: [],
})
export class SecondaryButtonComponent {
  @Input() title: string = '';
  @Output() onClick = new EventEmitter();

  click() {
    this.onClick.emit();
  }
}
