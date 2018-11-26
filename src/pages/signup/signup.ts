import { Component } from '@angular/core';
import { IonicPage, LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  constructor(private authService : AuthService, 
    private loadingController : LoadingController,
    private alertCtrl:AlertController){

  }

  onSignup(form:NgForm){
    const loading = this.loadingController.create({
      content : "Signing You Up..."
    });
    this.authService.signup(form.value.email,form.value.password)
     .then(data => {
       loading.dismiss();
       })
     .catch(error => {
       loading.dismiss();
       const alert = this.alertCtrl.create({
         title : 'Signup Failed',
         message : error.message,
         buttons : ['OK']
       })
       alert.present();
     });
     
   //console.log(form.value);
  }

}
