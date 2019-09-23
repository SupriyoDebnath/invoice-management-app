import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userForm: FormGroup;

  constructor(
    private appService: AppService,
    private router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.userForm = new FormGroup({ 
      username: new FormControl(''),
      password: new FormControl('')
    });
    console.log('Login Init');
  }

  validateUser(loginData) {
    const temp = '5';
    const username = loginData.username;
    const password = loginData.password;
    if (username.length === 0 || password.length === 0) {
      this.toastController.create({
        message: 'Username/Password cannnot be blank',
        duration: 1000,
        position: 'top',
        color: 'appreject'
      }).then(addToOrderConfirm => {
        addToOrderConfirm.present();
      });
      return false;
    } else {
      const callResult = this.appService.retrieveUser(username, btoa(password));
      if (callResult) {
        this.router.navigate(['/user']);
      } else {
        this.toastController.create({
          message: 'Username/Password is Inavlid',
          duration: 1000,
          position: 'top',
          color: 'appreject'
        }).then(addToOrderConfirm => {
          addToOrderConfirm.present();
        });
      }
      return callResult;
    }
  }

}
