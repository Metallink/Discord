import {Component, Input, OnInit} from '@angular/core';

import {Message} from '../modele/message.modele';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() chatMessage: Message;

  userEmail: string;
  userName: string;
  messageContent: string;


  constructor() { }

  ngOnInit(chatMessage = this.chatMessage) {

    this.messageContent = chatMessage.message;
  }

}
