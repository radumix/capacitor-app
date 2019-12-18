import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CustomerMenuPageRoutingModule } from './customer-menu-routing.module';
import { CustomerMenuPage } from './customer-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerMenuPageRoutingModule,
  ],
  declarations: [CustomerMenuPage]
})
export class CustomerMenuPageModule {}
