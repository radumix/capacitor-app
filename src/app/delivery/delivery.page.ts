import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { UtilsServiceService } from '../services/utils-service.service';
import { FirestoreService } from '../services/firestore.service';


@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit {
  @ViewChild('slides', { static: true }) slides: IonSlides;
  public address;
  public Time;
  public Days;
  public CurrentIndex = 0;
  slideOpts = {
    effect: 'flip'
  };
  public SlideIndex: any = 0;
  selectedTime: any = '6AM - 9AM';
  addressvalue: any = '';
  selectedDay: any = 'Sunday';
  addressArray;
  constructor(
    private route: Router, 
    public utils: UtilsServiceService, 
    public fireStore: FirestoreService
  ) {
    // this.address = 'D-Block,Malvia Nagar,Jaipur';
    this.Days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    this.Time = ['6AM - 9AM', '10AM - 1PM', '4PM - 7PM', '8PM - 11PM', '9AM - 4PM'];
    this.fireStore.getUserAddress().then((data) => {
      this.addressArray = data;
    });
    this.utils.AddAdressBackUrl = '/delivery';
   }

  ngOnInit() {
  }

  addAddress() {
    this.route.navigate(['add-address']);
  }

  slideTap(index) {
    this.CurrentIndex = index;
    this.SlideIndex = index;
    this.slides.slideTo(index, 200);
  }

  slideChanged() {

    this.slides.getActiveIndex().then((res) => {
      this.CurrentIndex = res;
      this.SlideIndex = res;
    });

  }

  check() {

  }

  paymentPage() {
    switch (this.SlideIndex) {
      case 0:
        this.selectedDay = 'Sunday';
        break;
      case 1:
        this.selectedDay = 'Monday';
        break;
      case 2:
        this.selectedDay = 'Tuesday';
        break;
      case 3:
        this.selectedDay = 'Wednesday';
        break;
      case 4:
        this.selectedDay = 'Thrusday';
        break;
      case 5:
        this.selectedDay = 'Friday';
        break;
      default:
        this.selectedDay = 'Saturday';

    }
    if (this.addressvalue) {
      this.route.navigate(['payment', {
        selectedDay: this.selectedDay,
        addressvalue: this.addressvalue,
        selectedTime: this.selectedTime
      }]);
    } else {
      this.utils.presentToast('All field is required here', true, 'bottom', 2100);
    }
  }

}
