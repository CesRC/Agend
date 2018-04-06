import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { importType } from '@angular/compiler/src/output/output_ast';
import { NuevoContactoPage } from '../nuevo-contacto/nuevo-contacto';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { ClickContactoPage } from '../click-contacto/click-contacto';


/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {

  contacts: Contact []=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private ContactService: ContactService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

  onLoadNewContact() {
     this.navCtrl.push(NuevoContactoPage);
   }

   ionViewWillEnter(){
     this.contacts= this.ContactService.getContact();
   }

   onItemTapped() {
    this.navCtrl.push(ClickContactoPage);

   }

}
