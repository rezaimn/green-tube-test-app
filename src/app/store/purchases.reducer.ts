import {NewPurchase, PurchaseReducerModel} from "./purchase.model";
import {createReducer, on} from "@ngrx/store";
import {
  createNewPurchaseAPISuccess,
  purchasesFetchAPISuccess
} from "./purchases.action";

export const initialNewPurchaseState: NewPurchase = {
  purchaseID: '',
  currency: '',
  expiresAt: '',
  userEmail: '',
  voucherAmount: 0
};
export const initialPurchasesState: PurchaseReducerModel = {
  newPurchase: initialNewPurchaseState,
  purchaseList: []
};


export const purchasesReducer = createReducer(
  initialPurchasesState,
  on(purchasesFetchAPISuccess, (state, {allPurchases}) => {
    return {...state, purchaseList: allPurchases}
  }),
  on(createNewPurchaseAPISuccess, (state, {response}) => {
    return {...state, newPurchase: response}
  })
);




