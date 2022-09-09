import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PurchaseSuccessComponent} from "./purchase-success/purchase-success.component";
import {PurchaseMainComponent} from "./purchase-main/purchase-main.component";
import {PurchaseFailedComponent} from "./purchase-failed/purchase-failed.component";
import {AuthGuard} from "../../shared/guards/auth.guard";
import {PurchaseVoucherComponent} from "./purchase-voucher.component";


const routes: Routes = [
  {

    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: PurchaseVoucherComponent,
    children: [
      {
        path: '',
        component: PurchaseMainComponent
      },
      {
        path: 'purchase-success',
        component: PurchaseSuccessComponent
      },
      {
        path: 'purchase-failed',
        component: PurchaseFailedComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseVoucherRoutingModule {
}
