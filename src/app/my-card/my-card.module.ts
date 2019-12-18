import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCardPageRoutingModule } from './my-card-routing.module';

import { MyCardPage } from './my-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCardPageRoutingModule
  ],
  declarations: [MyCardPage]
})
export class MyCardPageModule {}
