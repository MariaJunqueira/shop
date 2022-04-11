import { Component, Input } from '@angular/core';

import { Product } from '@models/product';
import { BasketService } from '@services/basket/basket.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent {
  @Input() product: Product;

  quantity: number = 1;

  constructor(private basketService: BasketService) { }

  addToBasket() {
    this.basketService.addToBasket(this.product, this.quantity);
  }

  onQuantityChange() {
    if (this.quantity < 0) {
      this.quantity = 1;
    }
  }
}
