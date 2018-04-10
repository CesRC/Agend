import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactoPage } from '../../pages/contacto/contacto';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { BrowserModule } from '@angular/platform-browser';
import { ToastService } from '../../services/toast-service';
/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
           ]
})

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  contact: Contact = {
    nombre: this.navParams.get('contact').nombre,
    organization: this.navParams.get('contact').organization,
    movil: this.navParams.get('contact').movil,
    correo: this.navParams.get('contact').correo,
  }

  constructor(private navCtrl: NavController, private navParams: NavParams, private contactService: ContactService, private toast: ToastService) {
  }

  ionViewWillLoad() {
    console.log(this.navParams.get('contact'));
  }

   saveContact(contact: Contact){
     this.contactService.editContact(contact).then (() => {
      this.toast.show(`${contact.nombre} saved!`);
       this.navCtrl.setRoot(ContactoPage);
     });
  }

  removeContact(contact: Contact){
    this.contactService.removeContact(contact).then (() => {
      this.toast.show(`${contact.nombre} deleted!`);
      this.navCtrl.setRoot(ContactoPage);
    });
  }

}
