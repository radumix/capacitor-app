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

@Component({
  selector: 'stor-paymentcards',
  templateUrl: './paymentcards.component.html',
  styleUrls: ['./paymentcards.component.scss'],
})
export class PaymentcardsComponent implements OnInit {
cardDetails: any;

  constructor(
    public dataService: DataService,
  ) {
    this.cardDetails = {cardNumber: null, cardType: null, cardCvv: null, cardDate: null, zipCode: null};
  }

  ngOnInit() {}

  SaveCard() {
    if (this.cardDetails.cardType === 'visa') {
      this.dataService.current_user.billing.push({card_number: '3124', expiry_date: '12/22', image: 'assets/imgs/visa.png'});
    }
    if (this.cardDetails.cardType === 'master') {
      this.dataService.current_user.billing.push({card_number: '3124', expiry_date: '12/22', image: 'assets/imgs/mastercard.png'});
    }

  }

}
