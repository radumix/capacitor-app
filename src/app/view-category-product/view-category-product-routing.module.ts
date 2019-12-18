import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCategoryProductPage } from './view-category-product.page';

const routes: Routes = [
  {
    path: '',
    component: ViewCategoryProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewCategoryProductPageRoutingModule {}
