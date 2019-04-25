import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}

  /**
   * check if current login session is still valid
   */
  public IsLoggedIn(): boolean {
    try {
      if ((Date.now() / 1000) < jwt_decode(localStorage.getItem('session-token')).exp) {
        return true;
      }
    } catch {
      return false;
    }
  }

  public login(username: string, password: string) {
    this.http.post(`${environment.apiEndpoint}/login`, {
        username: username,
        password: password
    }).subscribe(token => {
      localStorage.setItem('session-token', token.toString());
      this.router.navigate(['']);
    }, err => {
      console.error(err);
    });
  }

  logout() {
    localStorage.removeItem('session-token');
    this.router.navigate(['']);
  }
}