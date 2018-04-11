import { Contact } from "../models/contact.model";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class ContactService{

    private contactListRef = this.db.list<Contact>('contact');
    
    
    constructor(private db: AngularFireDatabase){
    }

    getContactList(){
        return this.contactListRef;
    }

    addContact (contact: Contact){
        return this.contactListRef.push(contact);
    }

    editContact (contact: Contact){
        return this.contactListRef.update(contact.key, contact);
    }

    removeContact(contact: Contact){
        return this.contactListRef.remove(contact.key);
    }



}