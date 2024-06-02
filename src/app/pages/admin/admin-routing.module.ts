import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [{ path: '', component: AdminComponent }, { path: 'successful', loadChildren: () => import('./successful/successful.module').then(m => m.SuccessfulModule) }, { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
