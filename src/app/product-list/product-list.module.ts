import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductListPageRoutingModule } from './product-list-routing.module';

import { ProductListPage } from './product-list.page';

import { TopHeaderComponent } from '../components/top-header/top-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductListPageRoutingModule
  ],
  declarations: [ProductListPage, TopHeaderComponent]
})
export class ProductListPageModule {}
