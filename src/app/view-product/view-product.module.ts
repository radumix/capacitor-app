import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewProductPageRoutingModule } from './view-product-routing.module';

import { ViewProductPage } from './view-product.page';

import { ReviewComponent } from '../components/review/review.component';
import { CheckDeliveryComponent } from '../components/check-delivery/check-delivery.component';
import { SimilarProductComponent } from '../components/similar-product/similar-product.component';
import { SharedModule } from '../share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ViewProductPageRoutingModule
  ],
  declarations: [ViewProductPage, SimilarProductComponent]
})
export class ViewProductPageModule {}
