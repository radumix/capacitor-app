import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { DataService } from '../services/data.service';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-view-category-product',
  templateUrl: './view-category-product.page.html',
  styleUrls: ['./view-category-product.page.scss'],
})
export class ViewCategoryProductPage implements OnInit {
  public categoryProducts;
  public categoryName: string;
  public categoryId: string;
  constructor(
    private activeRoute: ActivatedRoute,
    public cart: CartService,
    public dataServ: DataService,
    private route: Router,
    public fsServices: FirestoreService
  ) {
    this.activeRoute.params.subscribe((params: any) => {
      this.categoryName = params.categoryName;
      this.categoryId = params.categoryId;
      this.fsServices.getProductsAccordingToCategory(this.categoryId).then((data) => {
        this.categoryProducts = data;
      });
    });
   }

  ngOnInit() {
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
  cartPage() {
    this.route.navigate(['cart']);
  }

  viewProduct(product) {
    this.route.navigate(['view-product', { product: JSON.stringify(product) }]);
  }

  
}
