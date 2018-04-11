import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LogInPage } from '../pages/log-in/log-in';
import { AgendaPage } from '../pages/agenda/agenda';
import { ContactoPage } from '../pages/contacto/contacto';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { NuevoContactoPage } from '../pages/nuevo-contacto/nuevo-contacto';
import { EditPage } from '../pages/edit/edit';
import { NuevaTareaPage } from '../pages/nueva-tarea/nueva-tarea';
import { RegistroPage } from '../pages/registro/registro';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContactService } from '../services/contact.service';
import { TaskService } from '../services/task.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ToastService } from '../services/toast-service';
import { ContactoPageModule } from '../pages/contacto/contacto.module';
import { NuevoContactoPageModule } from '../pages/nuevo-contacto/nuevo-contacto.module';
import { EditPageModule } from '../pages/edit/edit.module';

export const firebaseConfig = {
  apiKey: "AIzaSyAsWkJbPHkBKC1SCj1aM4l2hP5p7HQDY_I",
  authDomain: "practica-optativa-depi.firebaseapp.com",
  databaseURL: "https://practica-optativa-depi.firebaseio.com",
  projectId: "practica-optativa-depi",
  storageBucket: "practica-optativa-depi.appspot.com",
  messagingSenderId: "1088558755915"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogInPage,
    //ContactoPage,
    AgendaPage,
    AcercaDePage,
    //NuevoContactoPage,
    NuevaTareaPage,
    //EditPage,
    RegistroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig,'practica-optativa-depi'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ContactoPageModule,
    NuevoContactoPageModule,
    EditPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogInPage,
    ContactoPage,
    AgendaPage,
    AcercaDePage,
    NuevoContactoPage,
    NuevaTareaPage,
    EditPage,
    RegistroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ContactService,
    TaskService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ToastService,
  ]
})
export class AppModule {}
