import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RateUsPage } from './rate-us.page';

const routes: Routes = [
  {
    path: '',
    component: RateUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RateUsPageRoutingModule {}
