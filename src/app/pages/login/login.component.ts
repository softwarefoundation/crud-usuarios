import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  userName: string = '';


  constructor(private router: Router) {
  }

  login() {
    console.log(this.userName);
    sessionStorage.setItem('user', this.userName);
    this.router.navigate(['home']);
  }
}
