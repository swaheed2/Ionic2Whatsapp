import {Component } from '@angular/core';
import {NavController} from 'ionic-angular'; 
import { ChatsService } from './chats.service';

@Component({
  templateUrl: 'build/pages/chats/chats.component.html',
  providers : [ChatsService]
})
export class ChatsComponent { 

  chats:any;
  chatsBackup:any;
  search: boolean = false;

  constructor(
    private navCtrl: NavController,
    private chatsService: ChatsService) {
      this.getChats();
  }

  getChats(){
    this.chatsService.getChats().subscribe( (data)=>{
        this.chats = data;
        this.chatsBackup = data;
    })
  }

  refreshChats(refresher){
    this.chatsService.getChats().subscribe( (data)=>{
        this.chats = data;
        this.chatsBackup = data;
        refresher.complete();
    })
  }
  
  toggleSearch(){ 
    this.search = this.search ? false : true; 
  }

  searchChats(ev: any){
    this.chats = this.chatsBackup;
    let val = ev.target.value.toLowerCase();
    console.log("val: " + val);
    if (val && val.trim() != '') {
      this.chats = this.chats.filter((item) => {
        let match = item.name.toLowerCase().indexOf(val) !== -1;
        return match;
      })
    }
  }
}
