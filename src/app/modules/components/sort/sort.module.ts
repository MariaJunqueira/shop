import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SortComponent } from './sort.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [SortComponent],
  exports: [SortComponent],
})
export class SortModule { }
