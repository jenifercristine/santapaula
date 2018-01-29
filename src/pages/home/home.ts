import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IonicPage}from "ionic-angular";
import {AlertServicesProvider } from '../../providers/alert-services/alert-services';
import { Title } from '@angular/platform-browser/src/browser/title';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {PerfilPage}from '../perfil/perfil';
import {CirurgiasPage}from '../cirurgias/cirurgias';
import {ConsultasPage}from '../consultas/consultas';
import {ExamesPage}from '../exames/exames';
import {PacientesPage}from '../pacientes/pacientes';
import {RetaguardaPage}from '../retaguarda/retaguarda';
import {TelefonesPage}from '../telefones/telefones';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alert :AlertServicesProvider) {


  }

chamaPerfil(){
  this.navCtrl.push(PerfilPage);
};

chamaCirurgias(){
  this.navCtrl.push(CirurgiasPage);
};
chamaConsultas(){
  this.navCtrl.push(ConsultasPage);
};

chamaExames(){
  this.navCtrl.push(ExamesPage);
};
chamaPacientes(){
  this.navCtrl.push(PacientesPage);
};
chamaRetaguarda(){
  this.navCtrl.push(RetaguardaPage);
};
chamaTelefones(){
  this.navCtrl.push(TelefonesPage);
};



chamaAlert(){
this.alert.presentAlertWithCallback("imagem","deseja acessar ?")
.then(res => {
  // resposta da promise se for verdadeira chama cirurgia.
  if (res) this.chamaCirurgias()
});

}
}
