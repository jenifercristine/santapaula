
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './app.component';

import { ListPage } from '../pages/list/list';

 
 import {PROVIDERS,NATIVEPROVIDERS,MODULES,NATIVEMODULES} from './app.imports';
import { ScannerProvider } from '../providers/scanner/scanner';
@NgModule({
  declarations: [
    MyApp,
  
    ListPage
  ],
  imports: [
   MODULES,
   NATIVEMODULES,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  
    ListPage
  ],
  providers: [
   PROVIDERS,
   NATIVEPROVIDERS,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ScannerProvider,
   
  ]
})
export class AppModule {}
