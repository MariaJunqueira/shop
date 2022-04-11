import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '@models/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  search: string;
  sort: string;
  originalProducts: Product[];
  products: Product[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.originalProducts = this.activatedRoute.snapshot.data.products;
    this.products = this.originalProducts;
  }

  filter(event) {
    this.search = event;
    this.products = this.originalProducts.filter((product) => { return product.name.toLowerCase().includes(event.toLowerCase()) });
    this.sorter(this.sort);
  }

  sorter(event) {
    this.sort = event;
    this.products = this.products.sort((productA, productB) => { return event === 'lowest_price' ? productA.value - productB.value : productB.value - productA.value });
  }

}
