import { Routes } from '@angular/router';

import { BasketComponent } from './basket.component';
import { BasketEditComponent } from './edit/edit.component';

export const basketRoutesModule: Routes = [
  {
    path: '',
    component: BasketComponent,
    children: [{ path: '', component: BasketEditComponent }],
  },
];
