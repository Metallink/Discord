import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UtilisateurModele} from '../modele/utilisateur.modele';


@Component({
  selector: 'app-creation-compte',
  templateUrl: './creation-compte.component.html',
  styleUrls: ['./creation-compte.component.css']
})
export class CreationCompteComponent implements OnInit {

  usernames: UtilisateurModele = {};

  showSpinner = true;


  constructor(private http: HttpClient, private router: Router) {}


  ngOnInit() {
  }

  saveUser() {

    this.http.post('/users', this.usernames)
      .subscribe(res => {
        this.router.navigate(['/chat-room', res]);
          // this.usernames = res;
          // if (this.usernames.username == null) {

          // } else {
          //   alert('cette utilisateur existe deja!');
          //   this.router.navigate(['/signup']);
          // }
        }, (err) => {
          console.log(err);
        }
      );
  }
}
