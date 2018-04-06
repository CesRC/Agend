import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactoPage } from '../contacto/contacto';
import { EditContactPage } from '../edit-contact/edit-contact';

/**
 * Generated class for the ClickContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-click-contacto',
  templateUrl: 'click-contacto.html',
})
export class ClickContactoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClickContactoPage');
  }

  backContactos(){
    this.navCtrl.push(ContactoPage);
  }

  editContacto(){
    this.navCtrl.push(EditContactPage)
  }

}
