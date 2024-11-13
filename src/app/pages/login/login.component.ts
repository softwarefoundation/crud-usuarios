import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = '';


  constructor(private router: Router) {
  }

  login() {
    sessionStorage.setItem('username', this.username);
    this.router.navigate(['home']);
  }
}
