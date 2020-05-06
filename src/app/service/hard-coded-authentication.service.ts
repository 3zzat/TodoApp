import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    console.log('Before ' + this.isUserLoggedIn());
    if (username === 'in28minutes' && password === 'dummy') {
      sessionStorage.setItem('authenticateUser', username);
      console.log('After ' + this.isUserLoggedIn());
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('authenticateUser');
  }
}
