import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {

  userName: string;
  isUserAdmin = false;

  constructor(
    private appService: AppService,
    private router: Router,
    private menuController: MenuController
  ) {
    if (!this.appService.user) {
      this.router.navigate(['/login']);
    }
   }

  ngOnInit() {
    console.log('User Menu Init');
  }

  reloadProps() {
    this.userName = this.appService.user.name;
    this.isUserAdmin = this.appService.user.isAdmin;
    console.log(this.menuController);
  }

  logoutUser() {
    console.log(this.menuController);
    this.appService.resetUser();
    this.menuController.close('userMenu');
    this.router.navigate(['/login']);
  }

}

