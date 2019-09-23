import { Injectable } from '@angular/core';
import { Item, Order, User } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public user: User;
  public items: Item[];
  public order: Order;

  constructor() { }

  /* List of functions that needs interaction to external server*/

  retrieveUser(username: string, encodedPassword: string) {
    // if return success
    this.user = {
      id: 'u1',
      name: 'User01',
      password: 'UGFzc3dvcmQwMQ==',
      isAdmin: true,
      isAuthenticated: true
    };
    return true;
  }

  retrieveItems() {
    // if return success
    this.items = [
      {
        id: 'i1',
        name: 'Egg Roll',
        avatar: 'https://www.letsfaceitnordic.com/content/images/thumbs/default-image_600.png',
        price: 30,
        percentageCGST: 10,
        percentageSGST: 0
      },
      {
        id: 'i2',
        name: 'Chicken Roll',
        avatar: 'https://www.letsfaceitnordic.com/content/images/thumbs/default-image_600.png',
        price: 45,
        percentageCGST: 10,
        percentageSGST: 0
      },
      {
        id: 'i3',
        name: 'Mughlai Paratha',
        avatar: 'https://www.letsfaceitnordic.com/content/images/thumbs/default-image_600.png',
        price: 50,
        percentageCGST: 10,
        percentageSGST: 0
      },
      {
        id: 'i4',
        name: 'Chicken Biriyani',
        avatar: 'https://www.letsfaceitnordic.com/content/images/thumbs/default-image_600.png',
        price: 150,
        percentageCGST: 10,
        percentageSGST: 0
      },
      {
        id: 'i5',
        name: 'Mutton Biriyani',
        avatar: 'https://www.letsfaceitnordic.com/content/images/thumbs/default-image_600.png',
        price: 200,
        percentageCGST: 10,
        percentageSGST: 0
      },
      {
        id: 'i6',
        name: 'Egg Roll',
        avatar: 'https://www.letsfaceitnordic.com/content/images/thumbs/default-image_600.png',
        price: 30,
        percentageCGST: 10,
        percentageSGST: 0
      },
      {
        id: 'i7',
        name: 'Chicken Roll',
        avatar: 'https://www.letsfaceitnordic.com/content/images/thumbs/default-image_600.png',
        price: 45,
        percentageCGST: 10,
        percentageSGST: 0
      },
      {
        id: 'i8',
        name: 'Mughlai Paratha',
        avatar: 'https://www.letsfaceitnordic.com/content/images/thumbs/default-image_600.png',
        price: 50,
        percentageCGST: 10,
        percentageSGST: 0
      },
      {
        id: 'i9',
        name: 'Chicken Biriyani',
        avatar: 'https://www.letsfaceitnordic.com/content/images/thumbs/default-image_600.png',
        price: 150,
        percentageCGST: 10,
        percentageSGST: 0
      },
      {
        id: 'i10',
        name: 'Mutton Biriyani',
        avatar: 'https://www.letsfaceitnordic.com/content/images/thumbs/default-image_600.png',
        price: 200,
        percentageCGST: 10,
        percentageSGST: 0
      },
      {
        id: 'i11',
        name: 'Egg Roll',
        avatar: 'https://www.letsfaceitnordic.com/content/images/thumbs/default-image_600.png',
        price: 30,
        percentageCGST: 10,
        percentageSGST: 0
      },
      {
        id: 'i12',
        name: 'Chicken Roll',
        avatar: 'https://www.letsfaceitnordic.com/content/images/thumbs/default-image_600.png',
        price: 45,
        percentageCGST: 10,
        percentageSGST: 0
      },
      {
        id: 'i13',
        name: 'Mughlai Paratha',
        avatar: 'https://www.letsfaceitnordic.com/content/images/thumbs/default-image_600.png',
        price: 50,
        percentageCGST: 10,
        percentageSGST: 0
      },
      {
        id: 'i14',
        name: 'Chicken Biriyani',
        avatar: 'https://www.letsfaceitnordic.com/content/images/thumbs/default-image_600.png',
        price: 150,
        percentageCGST: 10,
        percentageSGST: 0
      },
      {
        id: 'i15',
        name: 'Mutton Biriyani',
        avatar: 'https://www.letsfaceitnordic.com/content/images/thumbs/default-image_600.png',
        price: 200,
        percentageCGST: 10,
        percentageSGST: 0
      }
    ];
    return [...this.items];
  }

  createOrder(userId: string) {
    // if return success
    this.order = {
      id: 'o1',
      items: [],
      userId: 'u1',
      orderDate: new Date('2019-09-22T11:00:00'),
      amountNet: 0,
      amountCGST: 0,
      amountSGST: 0,
      amountGross: 0
    };
    return true;
  }

  retrieveOrders() {
    // if return success
    return true;
  }

  retrieveOrdersByUser(userId: string) {
    // if return success
    return true;
  }

  updateOrder(order: Order) {
    // if return success app should override this.order
    return true;
  }



  /* User Manipulation Method */

  resetUser() {
    this.user = null;
  }

  /* Item Manipulation Methods */

  /* Order Manipulation Method */

  addItemToOrder(selectedItemId: string) {
    /* if Item is present then increase quantity and adjust amount */
    /* if new item then add by 1 and adjust amount */
    const itemIndex = this.order.items.findIndex(item => {
      return item.itemId === selectedItemId;
    });
    if (itemIndex === -1) {
      this.order.items.push({
        itemId: selectedItemId,
        itemQuantity: 1
      });
    } else {
      this.order.items[itemIndex].itemQuantity++;
    }
    this.updateOrderTotalAmount(selectedItemId, 'add');
  }

  removeItemFromOrder(selectedItemId: string) {
    /* if Item quantity is 1 then delete and adjust amount */
    /* if Item quantity more than 1 then subtract by 1 and adjust amount */
    const itemIndex = this.order.items.findIndex(item => {
      return item.itemId === selectedItemId;
    });
    const itemQuantity = this.order.items[itemIndex].itemQuantity;
    if (itemQuantity > 1) {
      this.order.items[itemIndex].itemQuantity--;
    } else {
      this.order.items.splice(itemIndex, 1);
    }
    this.updateOrderTotalAmount(selectedItemId, 'subtract');
  }

  resetOrder() {
    this.order.items = [];
    this.order.amountNet = 0;
    this.order.amountCGST = 0;
    this.order.amountSGST = 0;
    this.order.amountGross = 0;
  }

  updateOrderTotalAmount(selectedItemId: string, operation: string) {
    const selectedItem = this.items.find(item => {
      return item.id === selectedItemId;
    });
    const gross = selectedItem.price;
    const cgst = selectedItem.price * (selectedItem.percentageCGST / 100);
    const sgst = selectedItem.price * (selectedItem.percentageSGST / 100);
    const net = gross + cgst + sgst;
    switch (operation) {
      case 'add': {
        this.order.amountGross = this.order.amountGross + gross;
        this.order.amountCGST = this.order.amountCGST + cgst;
        this.order.amountSGST = this.order.amountSGST + sgst;
        this.order.amountNet = this.order.amountNet + net;
        break;
      }
      case 'subtract': {
        this.order.amountGross = this.order.amountGross - gross;
        this.order.amountCGST = this.order.amountCGST - cgst;
        this.order.amountSGST = this.order.amountSGST - sgst;
        this.order.amountNet = this.order.amountNet - net;
        break;
      }
      default: {
         // unrecognized
         break;
      }
   }
  }
}
