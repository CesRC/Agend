import {Contact} from "../models/contact.model"
export class ContactService{
    
    private contacts: Contact []=
    [{"nombre": "Andres", "organization": "UC3M", "movil": "666666666", "correo":"andr@gmail.com"}];
    
    constructor(){
    }

    addContact(contacto: Contact){
        this.contacts.push(contacto);
    }

    getContact(){
        return this.contacts;
    }



}