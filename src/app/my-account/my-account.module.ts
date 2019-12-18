import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAccountPageRoutingModule } from './my-account-routing.module';

import { MyAccountPage } from './my-account.page';
import { MyProfileComponent } from '../components/my-profile/my-profile.component';
import { PaymentcardsComponent } from '../components/paymentcards/paymentcards.component';
import { MyAddressComponent } from '../components/my-address/my-address.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAccountPageRoutingModule
  ],
  declarations: [MyAccountPage, MyAccountPage, PaymentcardsComponent, MyProfileComponent, MyAddressComponent]
})
export class MyAccountPageModule {}
