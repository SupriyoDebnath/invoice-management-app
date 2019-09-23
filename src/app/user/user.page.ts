import { Component, OnInit } from '@angular/core';
import { Item, Order } from '../app.model';
import { AppService } from '../app.service';
import { ToastController, ModalController } from '@ionic/angular';
import { UserOrderPage } from './user-order/user-order.page';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  renderedItems: Item[];
  currentOrderItemQuantity: number;

  constructor(
    private appService: AppService,
    public toastController: ToastController,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.renderedItems = this.appService.retrieveItems();
    this.appService.createOrder(this.appService.user.id);
    this.currentOrderItemQuantity = this.appService.order.items.length;
    console.log('User Init');
  }

  ionViewWillEnter() {
    this.renderedItems = this.appService.retrieveItems();
    this.currentOrderItemQuantity = this.appService.order.items.length;
    console.log('User View Enter');
  }

  getSearchedItem() {
    console.log('Inside Search');
  }

  addToCurrentOrder(renderedItem: Item) {
    this.appService.addItemToOrder(renderedItem.id);
    this.currentOrderItemQuantity = this.appService.order.items.length;
    this.toastController.create({
      message: 'Item has been added to Order',
      duration: 1000,
      position: 'top',
      color: 'appconfirm'
    }).then(addToOrderConfirm => {
      addToOrderConfirm.present();
    });
  }

  showCurrentOrder() {
    if (this.currentOrderItemQuantity === 0) {
      this.toastController.create({
        message: 'Your Order List is Empty. Add Items to View Summary',
        duration: 1000,
        position: 'top',
        color: 'appreject'
      }).then(addToOrderConfirm => {
        addToOrderConfirm.present();
      });
      return;
    }
    this.modalController.create({
      component: UserOrderPage,
      cssClass: 'app-modal-css'
    }).then(orderModal => {
      orderModal.present();
      orderModal.onWillDismiss().then(currentModal => {
        this.currentOrderItemQuantity = this.appService.order.items.length;
      });
    });
  }

}
