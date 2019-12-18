/**
 *Grocery Shopping starter  (https://store.enappd.com/product/grocery-shopping-starterionic4-store2door)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { CommonModule,  } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AccordianComponent } from './components/accordian/accordian.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { DatetimeComponent } from './widget/datetime/datetime.component';
import { AdsComponent } from './widget/ads/ads.component';
import { SunsComponent } from './widget/suns/suns.component';
import { LefthandlebarComponent } from './widget/lefthandlebar/lefthandlebar.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [CommonModule, IonicModule],
    declarations: [AccordianComponent, TopHeaderComponent, DatetimeComponent, SunsComponent, AdsComponent, LefthandlebarComponent],
    exports: [AccordianComponent, TopHeaderComponent, DatetimeComponent, SunsComponent, AdsComponent, LefthandlebarComponent],
})
export class SharedModule { }
