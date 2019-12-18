import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { UtilsServiceService } from '../services/utils-service.service';
// import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
declare var google;


@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  items = ['New Delhi', 'Gurgaon', 'Jaipur', 'Goa', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Kolkata', 'Pune', 'Chennai', 'Chandigarh'];
  location: any;
  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  constructor(
    private route: Router,
    public util: UtilsServiceService,
    public modalCtrl: ModalController, 
    public toastCtrl: ToastController, 
    public geolocation: Geolocation, 
    private nativeGeocoder: NativeGeocoder
  ) { }

  ngOnInit() {
  }

  home() {
    this.route.navigate(['home']);
  }

  getUserLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.getGeoLocation(resp.coords.latitude, resp.coords.longitude);
    }).catch((error) => {
    });
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
              // this.locationAddress = rsltAdrComponent[0].long_name + ', ' + rsltAdrComponent[2].short_name + ', ' + rsltAdrComponent[1].short_name
            }
            for (let i = 0; i < rsltAdrComponent.length; i++) {
              if (rsltAdrComponent[i].types && rsltAdrComponent[i].types.includes('locality')) {
                this.util.userCity = rsltAdrComponent[i].short_name;
              }
            }
            this.util.presentToast('Location added successfully', true, 'bottom', 2100);
          } else {
            // alert("No address available!");
          }
        }
      });
    }
  }

}
