import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { TopSaversComponent } from '../components/top-savers/top-savers.component';
import { BestOffersComponent } from '../components/best-offers/best-offers.component';
import { PopularDealsComponent } from '../components/popular-deals/popular-deals.component';
import { ShortOffersComponent } from '../components/short-offers/short-offers.component';
import { StoreComponent } from '../components/store/store.component';
import { ItemsComponent } from '../components/items/items.component';
import { SharedModule } from '../share.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HomePageRoutingModule,
  ],
  declarations: [
    HomePage, 
    TopSaversComponent, 
    BestOffersComponent, 
    PopularDealsComponent, 
    ShortOffersComponent, 
    StoreComponent,
    ItemsComponent]

})
export class HomePageModule {}
