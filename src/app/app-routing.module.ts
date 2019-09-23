import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', redirectTo: 'login', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'user/user-order-invoice', loadChildren: './user/user-order-invoice/user-order-invoice.module#UserOrderInvoicePageModule' }
  // { path: 'user/user-order', loadChildren: './user/user-order/user-order.module#UserOrderPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
