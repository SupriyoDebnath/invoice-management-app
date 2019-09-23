import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/app.model';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-order-invoice',
  templateUrl: './user-order-invoice.page.html',
  styleUrls: ['./user-order-invoice.page.scss'],
})
export class UserOrderInvoicePage implements OnInit {

  userName: string;
  finalOrder: Order;

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit() {
    this.finalOrder = this.appService.order;
    this.userName = this.appService.user.name;
    console.log('User Order Invoice Init');
  }

  ionViewWillEnter() {
    this.finalOrder = this.appService.order;
    this.userName = this.appService.user.name;
    console.log('User Order Invoice View Enter');
  }

  getOrderedItemName(orderedItemId: string) {
    const orderedItemDetails = this.appService.items.find(item => {
      return item.id === orderedItemId;
    });
    return orderedItemDetails.name;
  }

  getOrderedItemGross(orderedItemId: string, orderedItemQuantity: number) {
    const orderedItemDetails = this.appService.items.find(item => {
      return item.id === orderedItemId;
    });
    return orderedItemDetails.price * orderedItemQuantity;
  }

  getOrderedItemGST(orderedItemId: string, orderedItemQuantity: number) {
    const orderedItemDetails = this.appService.items.find(item => {
      return item.id === orderedItemId;
    });
    const orderedItemGross = orderedItemDetails.price * orderedItemQuantity;
    const orderedItemCGST = orderedItemGross * (orderedItemDetails.percentageCGST / 100);
    const orderedItemSGST = orderedItemGross * (orderedItemDetails.percentageSGST / 100);
    return orderedItemCGST + orderedItemSGST;
  }

  getOrderedItemNet(orderedItemId: string, orderedItemQuantity: number) {
    const orderedItemDetails = this.appService.items.find(item => {
      return item.id === orderedItemId;
    });
    const orderedItemGross = orderedItemDetails.price * orderedItemQuantity;
    const orderedItemCGST = orderedItemGross * (orderedItemDetails.percentageCGST / 100);
    const orderedItemSGST = orderedItemGross * (orderedItemDetails.percentageSGST / 100);
    return orderedItemGross + orderedItemCGST + orderedItemSGST;
  }

  printInvoice() {
    console.log(this.appService.order);
    this.appService.updateOrder(this.appService.order);
    this.appService.createOrder(this.appService.user.id);
    this.router.navigate(['/user']);
  }

}
