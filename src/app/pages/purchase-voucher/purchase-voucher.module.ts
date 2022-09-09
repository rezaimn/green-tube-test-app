import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PurchaseVoucherRoutingModule} from './purchase-voucher-routing.module';
import {PurchaseSuccessComponent} from './purchase-success/purchase-success.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {FormsModule} from "@angular/forms";
import { PurchaseFailedComponent } from './purchase-failed/purchase-failed.component';
import { PurchaseMainComponent } from './purchase-main/purchase-main.component';
import {PurchasesEffects} from "../../store/purchases.effects";
import {purchasesReducer} from "../../store/purchases.reducer";
import { PurchaseVoucherComponent } from './purchase-voucher.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    PurchaseSuccessComponent,
    PurchaseFailedComponent,
    PurchaseMainComponent,
    PurchaseVoucherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PurchaseVoucherRoutingModule,
    StoreModule.forFeature("purchases", purchasesReducer),
    EffectsModule.forFeature([PurchasesEffects]),
    FormsModule,
    RouterModule
  ]
})
export class PurchaseVoucherModule {
}
