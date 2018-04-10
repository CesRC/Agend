import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LogInPage } from '../pages/log-in/log-in';
import { AgendaPage } from '../pages/agenda/agenda';
import { ContactoPage } from '../pages/contacto/contacto';
import { NuevoContactoPage } from '../pages/nuevo-contacto/nuevo-contacto';
import { EditPage } from '../pages/edit/edit';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { NuevaTareaPage } from '../pages/nueva-tarea/nueva-tarea';
import { RegistroPage } from '../pages/registro/registro';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ContactoPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Contactos', component: ContactoPage},
      { title: 'Agenda', component: AgendaPage},
      { title: 'Acerca de...', component: AcercaDePage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
