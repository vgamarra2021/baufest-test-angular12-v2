import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-paginator',
  templateUrl: './custom-paginator.component.html',
  styles: [],
})
export class CustomPaginatorComponent implements OnInit {
  @Input() page!: number;
  @Input() pageSize!: number;
  @Input() collectionSize!: number;
  @Output() onPageChange = new EventEmitter<number>();
  maxSize: number = 5;

  constructor() {}

  pageChange(newPage: number) {
    this.onPageChange.emit(newPage);
  }

  ngOnInit(): void {
    const windowWidth = window.innerWidth;
    if (windowWidth < 480) {
      this.maxSize = 2;
    }
  }
}
