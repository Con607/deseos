import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PendientesComponent } from '../pages/pendientes/pendientes.component';
import { TerminadosComponent } from '../pages/terminados/terminados.component';
import { TabsPage } from '../pages/tabs/tabs';
import { AgregarComponent } from '../pages/agregar/agregar.component';
import { ListaDetalleComponent } from '../pages/lista-detalle/lista-detalle.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Services
import { ListaDeseosService } from '../services/lista-deseos.service';

// Pipes
import { PlaceHolderPipe } from '../pipes/placeholder.pipe';


@NgModule({
  declarations: [
    MyApp,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
    PlaceHolderPipe,
    ListaDetalleComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
    ListaDetalleComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaDeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
