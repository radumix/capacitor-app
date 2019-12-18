/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UtilsServiceService } from '../../services/utils-service.service';
@Component({
  selector: 'check-delivery',
  templateUrl: './check-delivery.component.html',
  styleUrls: ['./check-delivery.component.scss'],
})
export class CheckDeliveryComponent implements OnInit {
  public cashDeliveryToggle: boolean;
  public freeShippingToggle: boolean;
  public deliveryDaysToggle: boolean;
  public pinCode = '';
  product: any = {};
  constructor(private activeRoute: ActivatedRoute, public utils: UtilsServiceService) {
    this.cashDeliveryToggle = false;
    this.freeShippingToggle = false;
    this.deliveryDaysToggle = false;
    this.activeRoute.params.subscribe((params: any) => {
      this.product = JSON.parse(params.product);
    });
  }
  checkPin(pinCode) {
    if (this.product.pin.length === 0) {
      this.utils.presentToast('All pincode supported for this product', true, 'bottom', 2100);
      return;
    } else {
      let matched = false;
      for (let i = 0; i < this.product.pin.length; i++) {
        if (pinCode === this.product.pin[i]) {
          matched = true;
        }
      }
      if (matched) {
        this.utils.presentToast('This pin code is supported for this product', true, 'bottom', 2100);
      } else {
        this.utils.presentToast('This pin code is not supported for this product', true, 'bottom', 2100);
      }
    }

  }

  ngOnInit() { }

  addAddress(item) {

    if (item === 'cashDelivery') {
      this.cashDeliveryToggle = true;
      this.freeShippingToggle = false;
      this.deliveryDaysToggle = false;
    }
    if (item === 'freeShipping') {
      this.cashDeliveryToggle = false;
      this.freeShippingToggle = true;
      this.deliveryDaysToggle = false;
    }
    if (item === 'deliveryDays') {
      this.cashDeliveryToggle = false;
      this.freeShippingToggle = false;
      this.deliveryDaysToggle = true;
    }
  }

}
