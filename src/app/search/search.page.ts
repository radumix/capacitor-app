import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { UtilsServiceService } from '../services/utils-service.service';
import { Router } from '@angular/router';
// import { Searchbar } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public RecentHistory: Array<any>;
  public SearchResult;
  constructor(
    private modalController: ModalController,
    public fsServices: FirestoreService,
    public util: UtilsServiceService,
    private route: Router
  ) {
    this.RecentHistory = [{ productName: 'Apple', category: 'Fruits' }, { productName: 'Apple', category: 'Fruits' }, { productName: 'Apple', category: 'Fruits' }];
   }

  ngOnInit() {
  }

  searchResult(eve) {
    if (eve.detail.value !== '') {
      this.fsServices.searchProducts(eve.detail.value).then((data) => {
        this.SearchResult = data;
      });
    }

  }
  viewProduct(product) {
    this.modalController.dismiss();
    if (this.fsServices.recentSearches.indexOf(product.name) === -1) {
      this.fsServices.recentSearches.push(product.name);
    }
    this.route.navigate(['view-product', { product: JSON.stringify(product) }]);
  }

  dismiss() {
    this.modalController.dismiss();
  }
  clearHistory() {
    this.RecentHistory = [];
    this.fsServices.recentSearches = [];
  }

}
