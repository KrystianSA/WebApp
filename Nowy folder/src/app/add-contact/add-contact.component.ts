import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  contact: Contact = {
    name: '',
    surname: '',
    email: '',
    password: '',
    phoneNumber: 0,
    categoryId: 0
  };

  message : string | undefined

  constructor(private contactService: ContactService){}

  AddContact(){
    this.contactService.addContact(this.contact).subscribe(()=>{
      this.message = "Dodano kontakt"
    });
  }
}

