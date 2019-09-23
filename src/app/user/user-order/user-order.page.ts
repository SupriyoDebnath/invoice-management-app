import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from '@ionic/angular';
import { Item, Order } from 'src/app/app.model';
import { AppService } from 'src/app/app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.page.html',
  styleUrls: ['./user-order.page.scss'],
})
export class UserOrderPage implements OnInit {

  currentOrder: Order;

  constructor(
    private appService: AppService,
    private navParams: NavParams,
    public alertController: AlertController, 
    public router: Router
  ) {}

  ngOnInit() {
    this.currentOrder = this.appService.order;
    console.log('User Order Init');
  }

  closeCurrentOrder() {
    this.navParams.data.modal.dismiss();
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

  increaseItemQuantity(orderedItemId: string) {
    this.appService.addItemToOrder(orderedItemId);
    this.currentOrder = this.appService.order;
  }

  decreaseItemQuantity(orderedItemId: string, orderedItemQuantity: number) {
    if (orderedItemQuantity === 1) {
      return;
    }
    this.appService.removeItemFromOrder(orderedItemId);
    this.currentOrder = this.appService.order;
  }

  removeFromCurrentOrder(orderedItemId: string, orderedItemQuantity: number) {
    for (let i = 1; i <= orderedItemQuantity; i++) {
      this.appService.removeItemFromOrder(orderedItemId);
    }
    this.currentOrder = this.appService.order;
  }

  cancelCurrentOrder() {
    this.alertController.create({
      header: 'Cancel Order',
      message: 'Are you sure to cancel this order?',
      cssClass: 'app-alert-css',
      buttons: [
        {
          text: 'No',
          cssClass: 'reject-button',
          role: 'cancel'
        },
        {
          text: 'Yes',
          cssClass: 'confirm-button',
          handler: () => {
            this.appService.resetOrder();
            this.closeCurrentOrder();
          }
        }
      ]
    }).then(cancelOrderAlert => {
      cancelOrderAlert.present();
    });
  }

  confirmCurrentOrder() {
    this.router.navigate(['/user/user-order-invoice']);
    this.closeCurrentOrder();
  }
}
