import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] | undefined;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.GetContacts();
  }

  GetContacts() {
    this.contactService.getContacts().subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
    }, 
    (error) => {
      console.error(error);
    });

  }

  showDetails(contact: Contact) {
    contact.showDetails = !contact.showDetails;
  }
}
