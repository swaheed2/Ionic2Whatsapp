import {Injectable} from "@angular/core";
import {Http} from "@angular/http"; 
import {Observable} from 'rxjs/Observable';


export class ContactsService{

    constructor(){}

    getContacts():Observable<any>{

        let data  = [
            {
                name    : "John",
                status : "Available",
                avatar  : "img/john.jpg",
                type    : "MOBILE"
            },
            {
                name    : "Michael",
                status : "Hey there! I am using WhatsApp",
                avatar  : "img/michael.jpg",
                type    : "MOBILE"
            },
            {
                name    : "Bob",
                status  : "Hey there! I am using WhatsApp",
                avatar  : "img/bob.jpg",
                type    : "MOBILE"
            },
            {
                name    : "Alice",
                status  : "Hey there! I am using WhatsApp",
                avatar  : "img/alice.jpg",
                type    : "MOBILE"
            },
            {
                name    : "Don",
                status  : "Hey there! I am using WhatsApp",
                avatar  : "img/person-icon.png",
                type    : "MOBILE"
            },
            {
                name    : "Carlos",
                status  : "Hey there! I am using WhatsApp",
                avatar  : "img/person-icon.png",
                type    : "MOBILE"
            },
            {
                name    : "Uncle Tom",
                status  : "Hey there! I am using WhatsApp",
                avatar  : "img/person-icon.png",
                type    : "MOBILE"
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