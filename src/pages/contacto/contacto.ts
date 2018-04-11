import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { NuevoContactoPage } from '../nuevo-contacto/nuevo-contacto';
import { ContactService} from '../../services/contact.service';
import { importType } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../../models/contact.model';
import { EditPage } from '../edit/edit';
//import { EditContactPage } from '../edit-contact/edit-contact';

/**
 * Generated class for the ContactoPage page.
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

  navEdit= EditPage;

  contactList: Observable<Contact[]>

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    private contactService: ContactService
  ) {
    this.contactList= this.contactService.getContactList().snapshotChanges().map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, 
          ...c.payload.val(),
          }))
        });
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }
  
  onLoadNewContact() {
    this.navCtrl.push(NuevoContactoPage);
  }


}
