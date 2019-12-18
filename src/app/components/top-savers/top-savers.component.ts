/**
 *Grocery Shopping starter  (https://store.enappd.com/product/grocery-shopping-starterionic4-store2door)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */


import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'top-savers',
  templateUrl: './top-savers.component.html',
  styleUrls: ['./top-savers.component.scss'],
})
export class TopSaversComponent implements OnInit {
  public topSavers;


  constructor(
    public dataServ: DataService,
    public cart: CartService,
    private route: Router
  ) {
    this.topSavers = dataServ.topSaversproduct[0];
  }

  ngOnInit() { }

  seeAllProduct() {
    this.route.navigate(['product-list']);
  }


  addToCart(index) {
    this.topSavers.products[index].units = 1;
    this.cart.addCart.push(this.topSavers.products[index]);
    this.cart.productQty += 1;
  }

  updateCart(productID, type) {
    const productunits = this.cart.addCart.find(el => el.id === productID);
    if (type === 'add') {
      productunits.units += 1;
      this.cart.productQty += 1;
    }
    if (type === 'remove') {
      productunits.units -= 1;
      this.cart.productQty -= 1;
    }

  }

  viewProduct(product) {
    this.route.navigate(['view-product', { product: JSON.stringify(product) }]);
  }


}
