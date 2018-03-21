import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../Auth/login/login';
import { RegisterPage } from '../Auth/register/register';
/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  gotoPage(page: string) {
    if (page === "login") {
      this.navCtrl.push(LoginPage);
    } else {
      this.navCtrl.push(RegisterPage);
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

}
