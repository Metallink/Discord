import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // constructor(private router: Router, private authService: AuthService, private token: TokenStorage) { }
  constructor(private router: Router) {}

  username: string;
  password: string;

  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['chat-room']);
      // alert('Ca marche !!');
    } else {
      // alert('Identifiant invalide!');
    }
  }

  // login(): void {
  //   this.authService.attemptAuth(this.username, this.password).subscribe(
  //     data => {
  //       this.token.saveToken(data.token);
  //       this.router.navigate(['user']);
  //     }
  //   );
  // }

  ngOnInit() {
  }

}
