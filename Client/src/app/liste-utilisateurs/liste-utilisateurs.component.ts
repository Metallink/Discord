import { Component, OnInit } from '@angular/core';
import {UtilisateurModele} from '../modele/utilisateur.modele';

@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.css']
})
export class ListeUtilisateursComponent implements OnInit {

  lesUtilisateurs: UtilisateurModele[];

  constructor() { }

  ngOnInit() {
  }

}
