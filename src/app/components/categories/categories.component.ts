/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */


import { Component, OnInit, Renderer, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'store-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  accordianExpandable = false;
  cardContentToggle = false;

  @ViewChild('cardContent', { static: true }) cardContent: any;
  @Input() title: string;
  @Input() image: string;
  @Input() label: string;
  @Input() desc: string;
  @Input() youInm: string;
  constructor(public render: Renderer) { }

  ngOnInit() {

  }

  toggleAccordian() {
    this.cardContentToggle = !this.cardContentToggle;
    this.accordianExpandable = !this.accordianExpandable;
    if (this.accordianExpandable) {
    }
  }

  condition() {
    return this.accordianExpandable;
  }


}
