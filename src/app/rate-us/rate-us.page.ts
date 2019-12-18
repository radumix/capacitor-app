import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-rate-us',
  templateUrl: './rate-us.page.html',
  styleUrls: ['./rate-us.page.scss'],
})
export class RateUsPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
