import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerMenuPage } from './customer-menu.page';

const routes: Routes = [
  {
    path: 'customer',
    component: CustomerMenuPage,
    children: [
      {
      path: 'pages',
      children: [{
        path: '',
        loadChildren: () => import('../../pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)    
      }]
    },
    {
      path: '',
      redirectTo: 'pages',
      pathMatch: 'full'
    }
  ]
  },
  {
    path: '',
    redirectTo: 'customer',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerMenuPageRoutingModule {}
