import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  forgotbutton : string = 'base';
  heading:string='Forgot Password';
  generateOtp(button :string){
    this.forgotbutton='child';
    this.heading='Reset Password';
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPage');
  }

}
