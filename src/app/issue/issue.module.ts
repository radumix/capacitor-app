import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IssuePageRoutingModule } from './issue-routing.module';

import { IssuePage } from './issue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IssuePageRoutingModule
  ],
  declarations: [IssuePage]
})
export class IssuePageModule {}
