import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { ContactsService } from './contacts.service'; 

@Component({
  templateUrl: 'build/pages/contacts/contacts.component.html',
  providers: [ContactsService]
})
export class ContactsPage {

  contacts:any;
  contactsBackup:any;
  search: boolean = false;

  constructor(private contactsService: ContactsService) {
      this.getContacts();
  }

  getContacts(){
    this.contactsService.getContacts().subscribe( (data)=>{
        this.contacts = data;
        this.contactsBackup = data;
    })
  }

  refreshContacts(refresher){
    this.contactsService.getContacts().subscribe( (data)=>{
        this.contacts = data;
        this.contactsBackup = data;
        refresher.complete();
    })
  }
  
  toggleSearch(){ 
    this.search = this.search ? false : true; 
  }

  searchContacts(ev: any){
    this.contacts = this.contactsBackup;
    let val = ev.target.value.toLowerCase();
    console.log("val: " + val);
    if (val && val.trim() != '') {
      this.contacts = this.contacts.filter((item) => {
        let match = item.name.toLowerCase().indexOf(val) !== -1;
        return match;
      })
    }
  }
}
