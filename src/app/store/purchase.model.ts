export interface PurchaseModel {
  id: number;
  name: string;
  lat: number;
  lng: number
  address: string;
  telephone: string;
  link: string;
  hours: string;
}


export interface NewPurchase {
  currency: string;
  expiresAt: string;
  purchaseID: string;
  userEmail: string;
  voucherAmount: number;
}

export interface PurchaseReducerModel {
  purchaseList: PurchaseModel[];
  newPurchase: NewPurchase;
}
