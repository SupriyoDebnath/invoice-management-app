import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserOrderInvoicePage } from './user-order-invoice.page';

const routes: Routes = [
  {
    path: '',
    component: UserOrderInvoicePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserOrderInvoicePage]
})
export class UserOrderInvoicePageModule {}
