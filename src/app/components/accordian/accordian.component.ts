/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */


import { Component, OnInit, ViewChild, Input, Renderer } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
@Component({
  selector: 'std-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss'],
})

export class AccordianComponent implements OnInit {

  public accordianExpandable = false;
  public cardContentToggle = false;

  @ViewChild('cardContent', { static: true }) cardContent: any;
  @Input() title: string;
  @Input() image: string;
  @Input() label: string;
  @Input() desc: string;
  @Input() youInm: string;
  @Input() id: string;
  public child;
  constructor(
    public render: Renderer,
    private fsServices: FirestoreService
  ) { }

  ngOnInit() {
  }

  toggleAccordian() {
    window.scroll({
      behavior: 'smooth'
    });
    this.cardContentToggle = !this.cardContentToggle;
    this.accordianExpandable = !this.accordianExpandable;
    if (this.accordianExpandable) {

    }
    this.fsServices.getProductsAccordingToCategory(this.id).then((data) => {
      this.child = data;
    });
  }

  condition() {
    return this.accordianExpandable;
  }

}
