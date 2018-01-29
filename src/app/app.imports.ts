  
import{HomePageModule}from '../pages/home/home.module';
import{PerfilPageModule}from '../pages/perfil/perfil.module';
import{CirurgiasPageModule}from '../pages/cirurgias/cirurgias.module';
import{ConsultasPageModule}from '../pages/consultas/consultas.module';
import{ExamesPageModule}from '../pages/exames/exames.module';
import{PacientesPageModule}from '../pages/pacientes/pacientes.module';
import{RetaguardaPageModule}from '../pages/retaguarda/retaguarda.module';
import{TelefonesPageModule}from '../pages/telefones/telefones.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserModule } from '@angular/platform-browser';


import {AlertServicesProvider } from '../providers/alert-services/alert-services';

  export const PROVIDERS=[
AlertServicesProvider
  ]

  export const NATIVEPROVIDERS=[
StatusBar,
SplashScreen


  ]

  export const MODULES=[
HomePageModule,
PerfilPageModule,
CirurgiasPageModule,
ConsultasPageModule,
ExamesPageModule,
PacientesPageModule,
RetaguardaPageModule,
TelefonesPageModule
  ]

  export const NATIVEMODULES =[
BrowserModule
  ]

