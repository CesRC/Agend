import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, Toast } from 'ionic-angular';
import { ContactoPage } from '../../pages/contacto/contacto';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { BrowserModule } from '@angular/platform-browser';
import { ToastService } from '../../services/toast-service';

@IonicPage()
@Component({
  selector: 'page-nuevo-contacto',
  templateUrl: 'nuevo-contacto.html',
})
export class NuevoContactoPage {

  contact: Contact = {
    nombre: '',
    organization: '',
    movil: '',
    correo: ''
  };

  constructor(private navCtrl: NavController, private navParams: NavParams, private contactService: ContactService, private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoContactoPage');
  }

  addContact (contact: Contact){
    this.contactService.addContact(contact).then(ref => {
      this.toast.show(`${contact.nombre} created!`);
      this.navCtrl.setRoot('ContactoPage', {key: ref.key});
    })
  }

}
