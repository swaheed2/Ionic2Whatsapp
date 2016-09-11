import {Injectable} from "@angular/core";
import {Http} from "@angular/http"; 
import {Observable} from 'rxjs/Observable';


export class ChatsService{

    constructor(){}

    getChats():Observable<any>{

        let data  = [
            {
            name    : "John",
            message : "Let me know if you are comming to the meeting tomorrow",
            avatar  : "img/john.jpg",
            time    : "6:03 PM",
            unread  : 1
            },
            {
            name    : "Bob",
            message : "Text me your address",
            avatar  : "img/bob.jpg",
            time    : "YESTERDAY",
            unread  : 7
            },
            {
            name    : "Don",
            message : "That's one class I wasn't worried about",
            avatar  : "img/person-icon.png",
            time    : "10/12/16"
            },
            {
            name    : "Alice",
            message : "We are meeting for the projects this evening, are you available?",
            avatar  : "img/alice.jpg",
            time    : "10/5/16"
            },
            {
            name    : "Carlos",
            message : "ok same here",
            avatar  : "img/person-icon.png",
            time    : "9/20/16"
            },
            {
            name    : "Michael",
            message : "Lets ball tonight at Lifetime!",
            avatar  : "img/michael.jpg",
            time    : "9/12/16"
            },
            {
            name    : "Uncle Tom",
            message : "Can you send me the info for online registration",
            avatar  : "img/person-icon.png",
            time    : "9/2/16"
            }

        ];

       return new Observable(observer => {
          setTimeout(() => {
              observer.next(data);
              observer.complete();
          }, 1000);  
      });
    }
}