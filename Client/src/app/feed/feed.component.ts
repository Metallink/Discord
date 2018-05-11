import {Component, OnChanges, OnInit} from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import $ from 'jquery';
import {Observable} from 'rxjs/Observable';
import {Message} from '../modele/message.modele';
import {ChatService} from '../services/chat.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit, OnChanges {

  private stompClient;
  chatMessage: string;
  feed: string;

  constructor(private chatS: ChatService) {}

  ngOnInit() {
    this.chatS.getMsg();
  }


  ngOnChanges() {
    this.chatS.getMsg();
  }
}
