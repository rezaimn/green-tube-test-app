import {createFeatureSelector} from "@ngrx/store";
import { PurchaseReducerModel} from "./purchase.model";


export const selectPurchases = createFeatureSelector<PurchaseReducerModel>('purchases')
