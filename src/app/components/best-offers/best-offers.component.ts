/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */


import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'best-offers',
  templateUrl: './best-offers.component.html',
  styleUrls: ['./best-offers.component.scss'],
})
export class BestOffersComponent implements OnInit {
  public bestOffers;
  constructor(
    public dataServ: DataService,
    public cart: CartService,
    private route: Router,
    private fsServices: FirestoreService
  ) {
    // this.bestOffers = dataServ.bestOffers[0];
    this.fsServices.getProductsAccordingToTags('Best Offers').then((data) => {
      this.bestOffers = data;
    });
  }

  ngOnInit() { }

  seeAllProduct() {
    this.route.navigate(['product-list']);
  }

  addToCart(product) {
    const productunits = this.cart.addCart.find(el => el.id === product.id);
    if (productunits) {
      productunits.units += 1;
      this.cart.productQty += 1;
      product.units = productunits.units;
    } else {
      product.units = 1;
      this.cart.addCart.push(product);
      this.cart.productQty += 1;
    }
  }

  updateCart(productID, type, product) {
    const productunits = this.cart.addCart.find(el => el.id === productID);
    const productIndex = this.cart.addCart.indexOf(el => el.id === productID);
    if (type === 'add') {
      productunits.units += 1;
      this.cart.productQty += 1;
      product.units = productunits.units;
    }
    if (type === 'remove') {
      productunits.units -= 1;
      this.cart.productQty -= 1;
      product.units = productunits.units;
      if (product.units === 0) {
        this.cart.addCart.splice(productIndex, 1);
      }
    }
  }

  viewProduct(product) {
    this.route.navigate(['view-product', { product: JSON.stringify(product) }]);
  }

}
