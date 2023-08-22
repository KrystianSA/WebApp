import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { UpdateContact } from '../models/UpdateContact';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent {

  contactId?: number;
  updateContact : UpdateContact = {
    email:'',
    phoneNumber:0,
    categoryId:0
  }; 

  message : string | undefined

  constructor(private contactService: ContactService){}

  UpdateContact(){
    if(this.contactId)
    this.contactService.updateContact(this.updateContact,this.contactId).subscribe(()=>{
      this.message="Zaktualizowano kontakt"
    })
  }
}
