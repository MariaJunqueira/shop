import { Component, Input } from '@angular/core';
import { Product } from '@models/product';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent {
  @Input() product: Product;

  quantity: number = 1;

  addToBasket() {
    console.log(this.quantity)
    // this.basketService.addToBasket(this.product, this.quantity);
  }

  onQuantityChange() {
    if (this.quantity < 0) {
      this.quantity = 1;
    }
  }
}
