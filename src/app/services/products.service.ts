/**
 *Grocery Shopping starter  (https://store.enappd.com/product/grocery-shopping-starterionic4-store2door)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  cartArray: Array<any>;
  constructor() {
    this.cartArray = [];
  }
}
