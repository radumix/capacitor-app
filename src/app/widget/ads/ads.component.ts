import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'widget-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
})
export class AdsComponent implements OnInit {
  slideOptsAds = {
    initialSlide: 1,
    speed: 400,
    autoplay: true,
  };
  public prodoctSlides: Array<any>;
  constructor() {
    this.prodoctSlides = ['assets/imgs/b1.jpg', 'assets/imgs/b2.jpg', 'assets/imgs/b3.png', 'assets/imgs/b4.jpg'];
   }

  ngOnInit() {}

}
