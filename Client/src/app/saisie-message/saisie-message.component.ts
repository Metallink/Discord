import {Component, Input, OnInit} from '@angular/core';
import {ChatService} from '../services/chat.service';

@Component({
  selector: 'app-saisie-message',
  templateUrl: './saisie-message.component.html',
  styleUrls: ['./saisie-message.component.css']
})
export class SaisieMessageComponent implements OnInit {

  message: string;
  // private this.stompClient;

  constructor(private chat: ChatService) { }

  send() {

    this.chat.sendMessage(this.message);
    // this.stompClient.send("/app/send/message" , {}, message);
    this.message = '';
  }

  handleSubmit(event) {
    if (event.keyCode === 13) {
      this.send();
    }
  }

  ngOnInit() {
  }

}
