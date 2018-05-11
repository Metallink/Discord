import {Component, Input, OnInit} from '@angular/core';
import {UtilisateurModele} from '../modele/utilisateur.modele';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  @Input()
  unUtilisateur: UtilisateurModele;

  constructor() { }

  ngOnInit() {
  }

}
