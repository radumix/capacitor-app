import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  public allProducts;
  constructor(
    public dataServ: DataService,
    public cart: CartService,
    private route: Router,
    public fsServices: FirestoreService
  ) {
    this.fsServices.getProducts().then((data) => {
      this.allProducts = data;
    });
   }

  ngOnInit() {
  }

  addToCart(product) {
    product.units = 1;
    this.cart.addCart.push(product);
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

  cartPage() {
    this.route.navigate(['cart']);
  }

  viewProduct(product) {
    this.route.navigate(['view-product', { product: JSON.stringify(product) }]);
  }

}
