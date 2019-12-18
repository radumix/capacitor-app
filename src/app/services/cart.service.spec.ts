/**
 *Grocery Shopping starter  (https://store.enappd.com/product/grocery-shopping-starterionic4-store2door)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });
});
