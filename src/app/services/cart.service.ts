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
export class CartService {
 public addCart: Array<any>;
 public subTotal;
 public deliveryCharge;
 public totalSave;
 public grandTotal;
 public productQty = 0;
 public orderComplete: Array<any>;

  constructor() {
    this.addCart = [];
    this.subTotal = 0;
    this.totalSave = 125;
    this.deliveryCharge = 49;
    this.grandTotal = 0;
    this.orderComplete = [];
   }
}
