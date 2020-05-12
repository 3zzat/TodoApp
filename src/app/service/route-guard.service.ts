import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { HardCodedAuthenticationService } from './hard-coded-authentication.service';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardCodedAuth: HardCodedAuthenticationService, private router: Router
    , private basicAuthService: BasicAuthenticationService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.basicAuthService.isUserLoggedIn()) {
      console.log('rout guard');
    return true;
    } else {
      console.log('rout guard fail');
      this.router.navigate(['login']);
      return false;
    }
  }
}
