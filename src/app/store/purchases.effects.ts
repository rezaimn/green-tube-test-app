import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {PurchaseVoucherApiService} from "../pages/purchase-voucher/purchase-voucher-api.service";
import {
  createNewPurchaseAPISuccess,
  invokeCreateNewPurchaseAPI,
  invokeGetAllPurchasesAPI,
  purchasesFetchAPISuccess

} from "./purchases.action";
import {exhaustMap, map, tap} from "rxjs";
import {PurchaseModel} from "./purchase.model";
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";


@Injectable()
export class PurchasesEffects {
  constructor(private action$: Actions, private purchasesService: PurchaseVoucherApiService, private router: Router) {
  }


  loadAllPurchases$ = createEffect(() =>
    this.action$.pipe(
      ofType(invokeGetAllPurchasesAPI),
      exhaustMap(() => {
        return this.purchasesService.getAllPurchases().pipe(
          map((data) => purchasesFetchAPISuccess({allPurchases: data}))
        );
      })
    )
  )

  saveNewPurchase$ = createEffect(() =>
    this.action$.pipe(
      ofType(invokeCreateNewPurchaseAPI),
      exhaustMap(() => {
        return this.purchasesService.createNewPurchase().pipe(
          tap(() => this.router.navigate(['/purchase-success'])),
          map((data) => createNewPurchaseAPISuccess({response: data})),
        );
      })
    )
  )

}
