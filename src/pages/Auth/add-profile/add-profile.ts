import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { urlConfig } from '../../../providers/urlService';
import { CommonServiceProvider } from '../../../providers/common-service';
/**
 * Generated class for the AddProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-profile',
  templateUrl: 'add-profile.html',
})
export class AddProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private chatService: CommonServiceProvider, private camera: Camera) {
  }


  setProfilePicture() {
   
  }

  login(user) {
    let url: string = urlConfig.apiEndpoint + urlConfig.user.login;
    this.chatService.post(url, user).subscribe((user) => {
      if (user.result.success) {
        localStorage.setItem('UID', user.result.user._id);
        localStorage.setItem('token', user.result.token);
        localStorage.setItem('user', user.result.user);
      }
    }, (error) => {
      console.log(error);
    });
  }

  ionViewDidLoad() {
    if (localStorage.getItem('userCreditinals') != undefined) {
      let userDetail = JSON.parse(localStorage.getItem('userCreditinals'));
      this.login(userDetail);
    }
  }

}
