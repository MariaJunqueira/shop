import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BasketComponent } from './basket.component';
import { BasketEditComponent } from './edit/edit.component';
import { basketRoutesModule } from './basket.routes.module';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(basketRoutesModule)],
  declarations: [BasketComponent, BasketEditComponent],
})
export class BasketModule {}
