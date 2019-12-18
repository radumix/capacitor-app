import { Component, OnInit } from '@angular/core';

import { AlertController, MenuController, ToastController, NavParams } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
import { FirestoreService } from '../services/firestore.service';
import { UtilsServiceService } from '../services/utils-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  addNewPayment = false;
  cardDetails: any;
  promoCode: any;
  appliedPromoCode: any;
  selectedDay: any;
  selectedTime: any;
  addressvalue: any;
  constructor(
    private menuCtrl: MenuController,
    public dataService: DataService,
    private alertController: AlertController,
    private route: Router,
    private toastCtrl: ToastController,
    public cart: CartService,
    public fsServices: FirestoreService,
    public util: UtilsServiceService,
    private activeRoute: ActivatedRoute,
    public product: ProductsService
  ) { 
    this.cardDetails = { cardNumber: null, cardType: null, cardCvv: null, cardDate: null, zipCode: null };
    this.activeRoute.params.subscribe((res) => {
      this.selectedDay = res.selectedDay;
      this.selectedTime = res.selectedTime;
      this.addressvalue = res.addressvalue;
    });
  }

  ngOnInit() {
  }

  addPayment() {
    this.addNewPayment = !this.addNewPayment;
  }

  async done() {
    let address = {};
    let promocode = {};
    for (let i = 0; i < this.fsServices.UserAddress.length; i++) {
      if (this.addressvalue === this.fsServices.UserAddress[i].id) {
        address = this.fsServices.UserAddress[i];
      }
    }
    if (this.fsServices.promoCodes.length) {
      this.fsServices.promoCodes.forEach(offer => {
        if (offer.code === this.appliedPromoCode) {
          promocode = offer;
        }
      });
    }
    this.fsServices.createUserOrder(this.cart.grandTotal, this.cart.addCart, promocode, this.selectedDay, this.selectedTime, address)
      .then(async () => {
        const toast = await this.toastCtrl.create({
          message: 'Your order Successfully Complete',
          duration: 2000,
          position: 'top'
        });
        toast.present();
        this.product.cartArray = this.cart.addCart;
        this.cart.addCart.map((ele) => {
          ele.units = 0;
        });
        this.cart.addCart = [];
        this.cart.productQty = 0;
        this.cart.subTotal = 0;
        this.cart.grandTotal = 0;
        this.route.navigate(['home']);
      });
  }
  removePromoCode() {
    this.appliedPromoCode = '';
    this.util.presentToast('Promocode removed successfully!', true, 'bottom', 2100);
    this.cart.grandTotal = 0;
    for (let i = 0; i < this.cart.addCart.length; i++) {
      const productPrice = this.cart.addCart[i].salePrice;
      this.cart.grandTotal += productPrice * this.cart.addCart[i].units;
    }
  }

  applyPromoCode(promocode) {
    let matched = false;
    if (this.fsServices.promoCodes.length === 0) {
      this.util.openLoader();
      this.fsServices.getOffers().then((data) => {
        data.subscribe(codes => {
          if (this.fsServices.promoCodes.length) {
            this.fsServices.promoCodes.forEach(offer => {
              if (offer.code === promocode) {
                matched = true;
                this.util.presentToast('Promocode applied successfully!', true, 'bottom', 2100);
                this.appliedPromoCode = promocode;
                this.promoCode = '';
                this.cart.grandTotal = 0;
                for (let i = 0; i < this.cart.addCart.length; i++) {
                  const productPrice = this.cart.addCart[i].salePrice - ((this.cart.addCart[i].salePrice * parseInt(offer.discount)) / 100);
                  this.cart.grandTotal += productPrice * this.cart.addCart[i].units;
                }
              }
            });
            if (!matched) {
              this.util.presentToast('Promocode is not valid!', true, 'bottom', 2100);
            }
          } else {
            this.util.presentToast('No Promocode is available for now!', true, 'bottom', 2100);
          }
        });
        this.util.closeLoading();
      });
    } else {
      this.fsServices.promoCodes.forEach(offer => {
        if (offer.code === promocode) {
          matched = true;
          this.util.presentToast('Promocode applied successfully!', true, 'bottom', 2100);
        }
      });
      if (!matched) {
        this.util.presentToast('Promocode is not valid!!', true, 'bottom', 2100);
      }
    }
  }
  async back() {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you want to cancel entering your payment info?',
      buttons: [
        {
          text: 'Yes',
          cssClass: 'mycolor',
          handler: (blah) => {
          }
        }, {
          text: 'No',
          role: 'cancel',
          cssClass: 'mycolor',
          handler: () => { }
        }
      ]
    });

    await alert.present();
  }

  SaveCard() {
    if (this.cardDetails.cardType === 'visa') {
      this.dataService.current_user.billing.push({ card_number: '3124', expiry_date: '12/22', image: 'assets/imgs/visa.png' });
    }
    if (this.cardDetails.cardType === 'master') {
      this.dataService.current_user.billing.push({ card_number: '3124', expiry_date: '12/22', image: 'assets/imgs/mastercard.png' });
    }
  }

}
