import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(private basicAuthService: BasicAuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // let userName = 'in28minutes';
    // let password = 'dummy';
    // let basicAuthHeaderString = 'Basic ' + window.btoa(userName + ':' + password);
    let basicAuthHeaderToken = this.basicAuthService.getAuthenticatedToken();
    let basicAuthheaderUsername = this.basicAuthService.getAuthenticatedUser();

    if (basicAuthHeaderToken && basicAuthheaderUsername) {
      req = req.clone({
        setHeaders: {
          Authorization: basicAuthHeaderToken
        }
      });
    }

    return next.handle(req);
  }
}
