import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { TabsPage } from '../../tabs/tabs';

import { urlConfig } from '../../../providers/urlService';
import { CommonServiceProvider } from '../../../providers/common-service';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public user: object = {
    username: "",
    password: ""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, private chatService: CommonServiceProvider, private toastCtrl: ToastController) {
  }

  gotoRegister() {
    this.navCtrl.push(RegisterPage);
  }

  login(formValid) {
    if (formValid.valid) {
      let url: string = urlConfig.apiEndpoint + urlConfig.user.login;
      this.chatService.post(url, this.user).subscribe((user) => {
        if (user.result.success) {
          localStorage.setItem('UID', user.result.user._id);
          localStorage.setItem('token', user.result.token);
          localStorage.setItem('user', user.result.user);
          this.navCtrl.push(TabsPage);
        } else {
          let toast = this.toastCtrl.create({
            message: user.result.message, 
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
        }
      }, (error) => {
        console.log(error);
      });
    }
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
