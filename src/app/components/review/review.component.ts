
/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stor-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  greenColor = 'green';

  public starfive: any = 0;
  public starfour: any = 0;
  public starthree: any = 0;
  public startwo: any = 0;
  public starone: any = 0;
  public averageReview: any = 0;
  public fivepercentage: any = 0;
  public fourpercentage: any = 0;
  public threepercentage: any = 0;
  public twopercentage: any = 0;
  public onepercentage: any = 0;
  public fivecss: any = '';
  public fourcss: any = '';
  public threecss: any = '';
  public twocss: any = '';
  public onecss: any = '';
  public review: Array<any>;

  constructor() {

    this.review = [
      {
        headline: 'Fresh Food',
        id: '9DFRHRGqjUoQYuZaqUdA',
        imageUrl: 'assets/imgs/herbs.jpg',
        message: 'Fresh and Good Product',
        productId: '04Nou0mdXzZ5oq0gtpgX',
        starCount: 5,
        userInfo: '',
        email: 'qwerty@ui.com',
        Uid: '7YVBOXqbr3bot7M27dYL8K625iD3',
        userId: '7YVBOXqbr3bot7M27dYL8K625iD3',
        username: 'Qwert',
      }];
    this.countReview();

  }

  ngOnInit() { }

  countReview() {
    for (let i = 0; i < this.review.length; i++) {
      if (this.review[i].starCount === 5) {
        this.starfive++;
      } else if (this.review[i].starCount === 4) {
        this.starfour++;
      } else if (this.review[i].starCount === 3) {
        this.starthree++;
      } else if (this.review[i].starCount === 2) {
        this.startwo++;
      } else if (this.review[i].starCount === 1) {
        this.starfour++;
      }
    }
    this.averageReview = (this.starfive * 5 + this.starfour * 4 + this.starthree * 3 + this.startwo * 2 + this.starone * 1) / this.review.length;
    this.findPercentage();
  }
  findPercentage() {
    if (this.starfive >= this.starfour && this.starfive >= this.starthree && this.starfive >= this.startwo && this.starfive >= this.starone) {
      this.fivepercentage = 100;
      this.threepercentage = (this.starthree / this.starfive) * 100;
      this.fourpercentage = (this.starfour / this.starfive) * 100;
      this.twopercentage = (this.startwo / this.starfive) * 100;
      this.onepercentage = (this.starone / this.starfive) * 100;
    } else if (this.starfour >= this.starfive && this.starfour >= this.starthree && this.starfour >= this.startwo && this.starfour >= this.starone) {
      this.fourpercentage = 100;
      this.threepercentage = (this.starthree / this.starfour) * 100;
      this.fivepercentage = (this.starfive / this.starfour) * 100;
      this.twopercentage = (this.startwo / this.starfour) * 100;
      this.onepercentage = (this.starone / this.starfour) * 100;
    } else if (this.starthree >= this.starfive && this.starthree >= this.starfour && this.starthree >= this.startwo && this.starthree >= this.starone) {
      this.threepercentage = 100;
      this.fourpercentage = (this.starfour / this.starthree) * 100;
      this.fivepercentage = (this.starfive / this.starthree) * 100;
      this.twopercentage = (this.startwo / this.starthree) * 100;
      this.onepercentage = (this.starone / this.starthree) * 100;
    } else if (this.startwo >= this.starfive && this.startwo >= this.starfour && this.startwo >= this.startwo && this.startwo >= this.starone) {
      this.twopercentage = 100;
      this.fourpercentage = (this.starfour / this.startwo) * 100;
      this.fivepercentage = (this.starfive / this.startwo) * 100;
      this.threepercentage = (this.starthree / this.startwo) * 100;
      this.onepercentage = (this.starone / this.startwo) * 100;
    } else if (this.starone >= this.starfive && this.starone >= this.starfour && this.starone >= this.starthree && this.starone >= this.startwo) {
      this.onepercentage = 100;
      this.fourpercentage = (this.starfour / this.starone) * 100;
      this.fivepercentage = (this.starfive / this.starone) * 100;
      this.threepercentage = (this.starthree / this.starone) * 100;
      this.twopercentage = (this.startwo / this.starone) * 100;
    }
    this.onepercentage = this.onepercentage.toFixed(1);
    this.fourpercentage = this.fourpercentage.toFixed(1);
    this.fivepercentage = this.fivepercentage.toFixed(1);
    this.threepercentage = this.threepercentage.toFixed(1);
    this.twopercentage = this.twopercentage.toFixed(1);
    this.fivecss = 100 - this.fivepercentage;
    this.fourcss = 100 - this.fourpercentage;
    this.threecss = 100 - this.threepercentage;
    this.twocss = 100 - this.twopercentage;
    this.onecss = 100 - this.onepercentage;
  }

}
