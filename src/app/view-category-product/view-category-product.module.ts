import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCategoryProductPageRoutingModule } from './view-category-product-routing.module';

import { ViewCategoryProductPage } from './view-category-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCategoryProductPageRoutingModule
  ],
  declarations: [ViewCategoryProductPage]
})
export class ViewCategoryProductPageModule {}
