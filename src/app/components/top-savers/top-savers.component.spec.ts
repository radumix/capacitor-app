/**
 *Grocery Shopping starter  (https://store.enappd.com/product/grocery-shopping-starterionic4-store2door)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSaversPage } from './top-savers.page';

describe('TopSaversPage', () => {
  let component: TopSaversPage;
  let fixture: ComponentFixture<TopSaversPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSaversPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSaversPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
