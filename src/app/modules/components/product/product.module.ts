import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { ControlsModule } from '../controls/controls.module';
import { PriceModule } from '../price/price.module';

@NgModule({
  imports: [CommonModule, ControlsModule, RouterModule, PriceModule],
  declarations: [ProductComponent],
  exports: [ProductComponent],
})
export class ProductModule {}
