import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor(private loginService: LoginService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (this.loginService.IsLoggedIn()) {
        // Logged in. Add Bearer token.
        return next.handle(
          req.clone({
            headers: req.headers.append('x-access-token', localStorage.getItem('session-token'))
          })
        );
      }

      // Not logged in. Continue without modification.
      return next.handle(req);
    }
}
