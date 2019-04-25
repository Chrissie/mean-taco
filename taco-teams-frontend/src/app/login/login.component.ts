import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  username: '';
  password: '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    if (this.loginService.IsLoggedIn()) {
      this.router.navigate(['']);
    }
  }

  login() {
    this.loginService.login(this.username, this.password);
    this.username = this.password = null;
  }
}
