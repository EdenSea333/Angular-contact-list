import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Contact } from '../contact';
import { WrapperService } from '../wrapper.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @Input() public contact: Contact = Contact.empty();

  constructor(
    public wrapperService: WrapperService,
    public sanitizer: DomSanitizer
  ) { }

}
