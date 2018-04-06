import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { BrowserModule } from '@angular/platform-browser';

/**
 * Generated class for the NuevoContactoPage page.
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
  selector: 'page-nuevo-contacto',
  templateUrl: 'nuevo-contacto.html',
})
export class NuevoContactoPage {

  constructor(public navCtrl: NavController, private contactService: ContactService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoContactoPage');
  }

   onAddContact(value: Contact){
     this.contactService.addContact (value);
     this.navCtrl.pop();

   }

}
