import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderPageRoutingModule } from './header-routing.module';

import { HeaderPage } from './header.page';
import { DraggableModule } from '../draggable/draggable.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DraggableModule,
    HeaderPageRoutingModule
  ],
  declarations: [HeaderPage],
})
export class HeaderPageModule {}
