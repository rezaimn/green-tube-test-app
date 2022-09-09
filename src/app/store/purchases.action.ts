import {createAction, props} from "@ngrx/store";
import {NewPurchase, PurchaseModel} from "./purchase.model";


export const invokeGetAllPurchasesAPI = createAction(
  "[Purchase API] invoke get all purchases fetch API"
)


export const purchasesFetchAPISuccess = createAction(
  "[Purchase API] purchase fetch API success",
  props<{ allPurchases: PurchaseModel[] }>()
)


export const invokeCreateNewPurchaseAPI = createAction(
  "[Purchase API] invoke create new purchase API",
)


export const createNewPurchaseAPISuccess = createAction(
  "[Purchase API] create new purchase API success",
  props<{ response: NewPurchase }>()
)
