
import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CartService } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ModalController, IonSlides, MenuController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { UtilsServiceService } from '../services/utils-service.service';
declare var google;
//import * as anime from 'animejs';
import { WidgetService } from '../services/widget.service';
import { SearchPage } from '../search/search.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  
})
export class HomePage implements OnInit {
  varValue="radumix";
  @ViewChild('ionSlides', { static: true }) ionSlides: IonSlides;
  public locationAddress;
  public prodoctSlides: Array<any>;
  public categoryItems;
  slideOpts = {
    effect: 'flip',
  };


  products: any = [];

  public productList: Array<any>;


  constructor(
    public dataServ: DataService,
    public http: HttpClient,
    private route: Router,
    public fsServices: FirestoreService,
    private menuCtrl: MenuController,
    private geolocation: Geolocation,
    public util: UtilsServiceService,
    public widgetService: WidgetService,
    private modalController: ModalController,
  ) {

    this.locationAddress = ' D-Block,Malviya Nagar,jaipur ';
    this.prodoctSlides = ['assets/images/southway.jpg', 'assets/images/gateway.jpg', 'assets/images/kcc.jpg', 'assets/images/mindpro.jpg'];

    this.fsServices.getProducts().then((data) => {
      this.products = data;
    });
    this.fsServices.getCategoriesHomePage().then((data) => {
      this.categoryItems = data;
    });



   }

  

   ionViewDidEnter() {
    this.menuCtrl.enable(true, 'start');
    this.geolocation.getCurrentPosition().then((resp) => {
      this.getGeoLocation(resp.coords.latitude, resp.coords.longitude);
    }).catch((error) => {
    });
  }
  change($event){
   console.log($event.value);
  }
  ngOnInit() {
    //this.ionSlides.startAutoplay();
  }
  slidesDidLoad() {
   // this.ionSlides.startAutoplay();
  }

  seeAllProduct() {
    this.route.navigate(['product-list']);
  }
  addLocation() {
    this.route.navigate(['location']);
  }

  goToProducts(title, product) {
    this.route.navigate(['view-category-product', { categoryName: title.name, categoryId: title.id, product: JSON.stringify(product) }]);
  }


 
  async getGeoLocation(lat: number, lng: number) {
    if (navigator.geolocation) {
      const geocoder = await new google.maps.Geocoder();
      const latlng = await new google.maps.LatLng(lat, lng);
      const request = { latLng: latlng };

      await geocoder.geocode(request, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          const result = results[0];
          const rsltAdrComponent = result.address_components;
          if (result != null) {

            if (rsltAdrComponent[0] != null) {
              this.locationAddress = rsltAdrComponent[0].long_name + ', ' + rsltAdrComponent[2].short_name + ', ' + rsltAdrComponent[1].short_name;
            }
            for (let i = 0; i < rsltAdrComponent.length; i++) {
              if (rsltAdrComponent[i].types && rsltAdrComponent[i].types.includes('locality')) {
                this.util.userCity = rsltAdrComponent[i].short_name;
              }
            }
          } else {
            // alert("No address available!");
          }
        }
      });
    }
  }

  async searchPage() {
    const modal = await this.modalController.create({
      component: SearchPage,
    });
    return await modal.present();
  }

}
