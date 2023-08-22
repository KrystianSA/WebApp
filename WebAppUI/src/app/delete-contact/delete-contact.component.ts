import { Component, Input } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.css']
})
export class DeleteContactComponent {
  
  @Input() contactId?: number;
  message : string | undefined;

  constructor(private contactService: ContactService){}

 DeleteContact() {
    if (this.contactId) {
      this.contactService.deleteContact(this.contactId).subscribe(() => {
        this.message = "Usunięto kontakt";
      });
    }
  }
}
