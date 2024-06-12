import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPaginatorComponent } from './custom-paginator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CustomPaginatorComponent],
  imports: [CommonModule, NgbModule],
  exports: [CustomPaginatorComponent],
})
export class CustomPaginatorModule {}
