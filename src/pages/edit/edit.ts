import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactoPage } from '../../pages/contacto/contacto';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { BrowserModule } from '@angular/platform-browser';
import { ToastService } from '../../services/toast-service';

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  contact: Contact = {
    nombre: '',
    organization: '',
    movil: '',
    correo: ''
  };

  constructor(private navCtrl: NavController, private navParams: NavParams, private contactService: ContactService, private toast: ToastService) {
  }

  ionViewDidLoad() {
    this.contact = this.navParams.get('contact');
  }

  saveContact(contact: Contact){
    this.contactService.editContact(contact).then (() => {
       this.toast.show(`${contact.nombre} saved!`);
       this.navCtrl.setRoot(ContactoPage);
     })
  }

  removeContact(contact: Contact){
    this.contactService.removeContact(contact).then (() => {
      this.toast.show(`${contact.nombre} deleted!`);
      this.navCtrl.setRoot(ContactoPage);
    })
  }

}
