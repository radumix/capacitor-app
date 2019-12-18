
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
import { Router } from '@angular/router';
import { UtilsServiceService } from '../../services/utils-service.service';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'my-address',
  templateUrl: './my-address.component.html',
  styleUrls: ['./my-address.component.scss'],
})
export class MyAddressComponent implements OnInit {
  address;
  constructor(
    public dataService: DataService,
    public route: Router, private fsSevices: FirestoreService) {
    this.fsSevices.getUserAddress().then((data) => {
      this.address = data;
    });
  }

  ngOnInit() { }

  addAddress() {
    this.route.navigate(['add-address']);
  }
  ionViewDidEnter() {

  }

}
