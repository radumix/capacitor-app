import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  public offerList;

  constructor(
    public fsServices: FirestoreService
  ) {
    this.fsServices.getOffers().then((data) => {
      this.offerList = data;
    });
    // this. =[
    //   {title:'Month End Savers', date:'22 - 28 Feb', imageUrl:'assets/imgs/pixel3.jpeg',discount:'Get Rs.150 discount on your favourites Products',couponCode:'SAVE150',minOrder:'Rs.1800'},
    //   {title:'Monsoon Savers', date:'19-24 June', imageUrl:'assets/imgs/pixel3.jpeg',discount:'Rs.125 cashback for Smart Bachat  Club Members only',couponCode:'SAVE125',minOrder:'Rs.1000'},
    //   {title:'Special Offer',  date:'5-8 March',imageUrl:'assets/imgs/pixel2.jpeg',discount:'Rs.65 cashback',couponCode:'SAVE65',minOrder:'Rs.1000'},
    //   {title:'Flsy 20% cashback on your 1st order', date:'5-8 March', imageUrl:'assets/imgs/pixel1.jpeg',discount:'Get up to Rs.250 cashback',couponCode:'SAVE65',minOrder:'Rs.500'}
    // ]
   }

  ngOnInit() {
  }

}
