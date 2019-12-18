import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { UtilsServiceService } from '../services/utils-service.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {
  public name;
  public flatNumber;
  public street;
  public locality;
  public title;
  public addresstype;
  public toggle: boolean;
  public btnColor;
  public homeTrue: boolean;
  public officeTrue: boolean;
  constructor(
    private route: Router,
    public utils: UtilsServiceService,
    private toastCtrl: ToastController,
    public fireStore: FirestoreService
  ) { }

  ngOnInit() {
    this.homeTrue = false;
    this.officeTrue = false;
    this.btnColor = 'undefined';
  }
  addAddress(item) {
    if (item === 'Home') {
      this.btnColor = 'primary';
      this.homeTrue = true;
      this.officeTrue = false;
    }
    if (item === 'Office') {
      this.officeTrue = true;
      this.homeTrue = false;
    }
    this.addresstype = item;
  }

  async Continue() {
    if (this.name && this.flatNumber && this.street && this.locality && this.title && this.addresstype) {
      this.fireStore.addUserAddress({
        name: this.name, flatNumber: this.flatNumber, street: this.street, locality: this.locality, title: this.title, addresstype: this.addresstype
      }).then(async () => {
        const toast = await this.toastCtrl.create({
          message: 'Add new Address Successfully',
          duration: 2000,
          position: 'top'
        });
        toast.present();
        this.route.navigate([this.utils.AddAdressBackUrl, { title: 'MyAddress' }]);
      });
    } else {
      const toast = await this.toastCtrl.create({
        message: 'All fields are required here',
        duration: 2000,
        position: 'top'
      });
      toast.present();
    }

  }

}
