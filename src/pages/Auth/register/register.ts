import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { AddProfilePage } from '../../Auth/add-profile/add-profile';
import { LoginPage } from '../../Auth/login/login';

import { urlConfig } from '../../../providers/urlService';
import { CommonServiceProvider } from '../../../providers/common-service';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public user: object = {
    username: "",
    email: "",
    password: ""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, private ChatService: CommonServiceProvider, private toastCtrl: ToastController) {
  }

  gotoLogin() {
    this.navCtrl.push(LoginPage);
  };

  register(formValid) {
    if (formValid.valid) {
      let url = urlConfig.apiEndpoint + urlConfig.user.register;
      this.ChatService.post(url, this.user).subscribe((res) => {
        if (res.result.success) {
          localStorage.setItem('userCreditinals', JSON.stringify(this.user));
          this.navCtrl.push(AddProfilePage);
        } else {
          let toast = this.toastCtrl.create({
            message: res.result.message,
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
        }
      }, error => {
        console.log(error);
      });
    }
  }

  ionViewDidLoad() {

  }

}
