import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PurchaseModel} from "../../store/purchase.model";
import {environment} from "../../../environments/environment";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PurchaseVoucherApiService {

  constructor(private http: HttpClient) {
  }


  getAllPurchases() {
    return this.http.get<PurchaseModel[]>(`${environment.baseUrl}/b/631aee46a1610e63862444c0`).pipe(
      map((data: any) => data.record.venues)
    );
  }

  createNewPurchase() {
    return this.http.get<PurchaseModel>(`${environment.baseUrl}/b/6311b2fde13e6063dc979a31`).pipe(
      map((data: any) => data.record)
    );
  }
}
