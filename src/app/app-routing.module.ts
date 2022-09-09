import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=> import('./pages/purchase-voucher/purchase-voucher.module').then(b=>b.PurchaseVoucherModule)
  },
  {
    path:'auth',
    loadChildren:()=> import('./auth/auth.module').then(b=>b.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
