
import { Injectable } from '@angular/core';
import {AlertController}from 'ionic-angular';
import {Button} from 'ionic-angular/components/button/button';
import {HomePage}from '../../pages/home/home';
/*
  Generated class for the AlertSericeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertServicesProvider {

  constructor( private alertCtrl:AlertController) {
   
  }



presentAlert(msg){
const alert =this.alertCtrl.create({
title:'mensagem',
subTitle:msg,
buttons:[{
  text:'yes'
}]

});
return alert.present();
}
presentErrorAlert(msg:string){
return this.presentAlert("erro");

}

 presentAlertWithCallback(title: string,message: string):Promise<boolean> {
    return new Promise((resolve, reject)=>{
    const confirm =this.alertCtrl.create({
      title,
      message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            confirm.dismiss().then(res=> resolve(false));
         return false;
          }
        },
        {
          text: 'yes',
          handler: () => {
            // chamar metodo aqui
            confirm.dismiss().then(()=> resolve(true));
          return false;

          }
        }
      ]
    });
    return confirm.present();
  });



}

}
