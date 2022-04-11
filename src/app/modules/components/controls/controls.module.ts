import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BasketService } from '@services/basket/basket.service';
import { ControlsComponent } from './controls.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ControlsComponent],
  exports: [ControlsComponent],
  providers: [BasketService]
})
export class ControlsModule { }
