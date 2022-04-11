import { Routes } from '@angular/router';

import { PagesComponent } from './pages.component';

export const pagesRoutesModule: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'basket',
        loadChildren: () =>
          import('./basket/basket.module').then((m) => m.BasketModule),
      },
    ],
  },
];
