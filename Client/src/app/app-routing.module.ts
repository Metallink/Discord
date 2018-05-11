import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {CreationCompteComponent} from './creation-compte/creation-compte.component';
import {ChatRoomComponent} from './chat-room/chat-room.component';

// permet de definir les routes URI en pointant vers le component adapté
const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: CreationCompteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'chat-room', component: ChatRoomComponent },
];

@NgModule({
  imports: [
      // forRoot permet de de créer un module contenant toutes les directives, les routes créees et le routeur lui meme
    RouterModule.forRoot(routes)
  ],
   exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
