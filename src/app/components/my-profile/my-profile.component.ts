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
import { UtilsServiceService } from '../../services/utils-service.service';
import { FirestoreService } from '../../services/firestore.service';


@Component({
  selector: 'my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  public toggle: boolean;
  public btnColor;
  userInfo: any = {};

  constructor( public utils: UtilsServiceService, public fireStore: FirestoreService) {
    this.userInfo = Object.assign({}, this.utils.userInfo);
  }

  ngOnInit() { }

  Continue() {
    if (this.userInfo.username && this.userInfo.phoneNumber && this.userInfo.gender) {
      this.fireStore.updateUser(this.userInfo.id, Object.assign({}, this.userInfo));
    } else {
      this.utils.presentToast('All field is required here', true, 'bottom', 2100);
    }
  }
}
