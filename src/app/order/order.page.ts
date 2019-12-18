import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { UtilsServiceService } from '../services/utils-service.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  public orders;
  constructor(
    public products: ProductsService,
    public fsServices: FirestoreService,
    public util: UtilsServiceService,
    private route: Router
  ) {
    this.fsServices.getUserOrders().then((data) => {
      this.orders = data;
    });
   }

  ngOnInit() {
  }

  startShopping() {
    this.route.navigate(['home']);
  }

}
