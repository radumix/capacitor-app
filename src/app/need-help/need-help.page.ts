import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { ModalController } from '@ionic/angular';
import { IssuePage } from '../issue/issue.page';
import { Router } from '@angular/router';
import { SearchPage } from '../search/search.page';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-need-help',
  templateUrl: './need-help.page.html',
  styleUrls: ['./need-help.page.scss'],
})
export class NeedHelpPage implements OnInit {
  public questions: any;
  public faqs;

  constructor(
    public dataServ: DataService,
    private modalController: ModalController,
    private route: Router,
    public cart: CartService
  ) {
    this.faqs = dataServ.needHelp;
    this.questions = Object.keys(dataServ.needHelp);
   }

  ngOnInit() {
  }
  async openIssue(i, question) {
    const modal = await this.modalController.create({
      component: IssuePage,
      componentProps: { value: Object.values(this.faqs)[i], title: question }
    });
    return await modal.present();
  }
  async searchPage() {
    // this.route.navigate(['search'])
    const modal = await this.modalController.create({
      component: SearchPage,
    });
    return await modal.present();
  }
  cartPage() {
    this.route.navigate(['cart']);
  }
}
