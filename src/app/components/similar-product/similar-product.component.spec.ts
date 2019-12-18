/**
 * Ionic 4  Grocery Complete Platform(https://store.enappd.com/product/ionic-4-grocery-app-and-admin-dashboard)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */



import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarProductPage } from './similar-product.page';

describe('SimilarProductPage', () => {
  let component: SimilarProductPage;
  let fixture: ComponentFixture<SimilarProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarProductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
