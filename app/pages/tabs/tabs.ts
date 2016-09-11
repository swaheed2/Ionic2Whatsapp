import {Component} from '@angular/core';
import {ChatsComponent} from '../chats/chats.component'; 
import {ContactsPage} from '../contacts/contacts.component';
 
@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = ChatsComponent;
    this.tab2Root = ContactsPage; 
  }
}
