import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(
    public dataServ: DataService,
    public cart: CartService,
    public route: Router,
    public alertController: AlertController
  ) {
   }

  ngOnInit() {
    this.addCart();
  }

  startShopping() {
    this.route.navigate(['home']);
  }

  addCart() {
    console.log("radumix");
    this.cart.subTotal=0;
    this.cart.addCart.map(el => {
      const total = el.units * el.price;
      this.cart.subTotal = this.cart.subTotal + total;
      this.cart.grandTotal = this.cart.subTotal + this.cart.deliveryCharge;
    });
  }

  updateCart(productID, type) {
    const productunits = this.cart.addCart.find(el => el.id === productID);
    let id;

    if (type === 'add') {
      productunits.units += 1;
      this.cart.productQty += 1;
      const total = 1 * productunits.price;
      this.cart.subTotal = this.cart.subTotal + total;
      this.cart.grandTotal = this.cart.subTotal + this.cart.deliveryCharge;
    }

    if (type === 'remove') {

      if (productunits.units > 1) {
        productunits.units -= 1;
        id = productunits.id;
        this.cart.productQty -= 1;
        const total = 1 * productunits.price;
        this.cart.subTotal = this.cart.subTotal - total;
        this.cart.grandTotal = this.cart.subTotal + this.cart.deliveryCharge;

      } else {
        this.removeProduct(productID, id);
      }

    }

  }

  async removeProduct(productID, index, productUnit?) {
    const alert = await this.alertController.create({
      header: 'Remove From Cart!',
      message: 'Are you Sure you want to remove this Product',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (cancel) => {
            console.log('Confirm Cancel:' + cancel);
          }
        }, {
          text: 'Remove',
          handler: () => {
            console.log('Confirm Okay');
            this.cart.productQty = this.cart.productQty - productUnit || 0;
            const productunits = this.cart.addCart.find(el => el.id === productID);
            const total = 1 * productunits.price;
            this.cart.subTotal = this.cart.subTotal - total;
            this.cart.grandTotal = this.cart.subTotal + this.cart.deliveryCharge;
            productunits.units = 0;
            if (this.cart.productQty === 0) {
              this.cart.subTotal = 0;
              this.cart.grandTotal = 0;
            }
            this.cart.addCart.splice(index, 1);
            this.addCart();
          }
        }
      ]
    });

    await alert.present();
  }

  deliveryAddress() {
    this.route.navigate(['delivery']);
  }

}
