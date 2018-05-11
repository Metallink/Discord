import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {ChatService} from './services/chat.service';

import { AppComponent } from './app.component';
import { CreationCompteComponent } from './creation-compte/creation-compte.component';
import { LoginComponent } from './login/login.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ListeUtilisateursComponent } from './liste-utilisateurs/liste-utilisateurs.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { FeedComponent } from './feed/feed.component';
import { MessagesComponent } from './messages/messages.component';
import { SaisieMessageComponent } from './saisie-message/saisie-message.component';



@NgModule({
  declarations: [
    AppComponent,
    CreationCompteComponent,
    ChatRoomComponent,
    ListeUtilisateursComponent,
    UtilisateursComponent,
    FeedComponent,
    MessagesComponent,
    SaisieMessageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
