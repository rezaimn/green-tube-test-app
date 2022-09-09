import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {selectPurchases} from "../../../store/purchases.selector";
import {invokeCreateNewPurchaseAPI, invokeGetAllPurchasesAPI} from "../../../store/purchases.action";
import {map} from "rxjs";

@Component({
  selector: 'app-purchase-main',
  templateUrl: './purchase-main.component.html',
  styleUrls: ['./purchase-main.component.scss']
})
export class PurchaseMainComponent implements OnInit {

  constructor(private store: Store) {
  }

  purchases$ = this.store.pipe(select(selectPurchases), map(purchase => purchase.purchaseList));

  ngOnInit(): void {
    this.store.dispatch(invokeGetAllPurchasesAPI())
  }

  newPurchase() {
    this.store.dispatch(invokeCreateNewPurchaseAPI())
  }
}
