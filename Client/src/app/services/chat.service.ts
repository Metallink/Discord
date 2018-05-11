import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import {Message} from '../modele/message.modele';
import $ from 'jquery';

@Injectable()
export class ChatService {

  private stompClient;
  // private feed: string[];
  feed: string;

  constructor() {
    const ws = new SockJS('http://localhost:8080/connexion-websocket');
    this.stompClient = Stomp.over(ws);
  }

  getMsg() {

    const that = this;
    this.stompClient.connect({}, function() {
      that.stompClient.subscribe('/chat', (msgReceived) => {
        if (msgReceived.body) {
          $('.chat-container').append(
            '<div class=\'message-container\'>' +
            '<div class=\'message-contenu\'>' +
            msgReceived.body +
            '</div>' +
            '</div>'
          );
        }
        // $('.chat').append('<div class=\'message\'>' + message.body + '</div>');
        // console.log(message.body);
        // this.feed.push(msgReceived.body);
        // this.feed = msgReceived.body;
        // return this.feed;

        // alert('MESSAGE RECEIVE= ' + msgReceived);
        // alert('FEED= ' + this.feed);
        // }
      });
    });
  }



  getMessages(yolo: string) {
    const that = this;
    this.stompClient.connect({}, function() {
      that.stompClient.subscribe('/chat', (msgReceived) => {
        if (msgReceived.body) {
          // this.feed = msgReceived.body;
          // this.feed.push(msgReceived.body);
          yolo = msgReceived.body;
        }
        // $('.chat').append('<div class=\'message\'>' + message.body + '</div>');
        // console.log(message.body);
        // this.feed.push(msgReceived.body);
        // this.feed = msgReceived.body;
        // return this.feed;

        // alert('MESSAGE RECEIVE= ' + msgReceived);
        // alert('FEED= ' + this.feed);
        // }
      });
    });
  }

  sendMessage(msg: string) {
    this.stompClient.send('/app/send/message' , {}, msg);
  }

}
