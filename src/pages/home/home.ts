import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onLogin(){
    this.navCtrl.push(SigninPage);
  }

  onSignup(){
    this.navCtrl.push(SignupPage);
  }

}
