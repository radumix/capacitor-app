import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IssuePage } from './issue.page';

const routes: Routes = [
  {
    path: '',
    component: IssuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IssuePageRoutingModule {}
