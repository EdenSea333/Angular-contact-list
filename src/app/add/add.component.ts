import { Component, OnInit } from '@angular/core';
import { WrapperService } from '../wrapper.service';
import { Contact } from '../contact';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    public wrapperService: WrapperService,
    public sanitizer: DomSanitizer) {
    this.wrapperService.globalService.createContactForm();
  }

  ngOnInit() {
    this.wrapperService.globalService.showAdd();
    this.wrapperService.globalService.currentContact = Contact.empty();
  }

  get f() {
    return this.wrapperService.globalService.contactForm.controls;
  }

}
