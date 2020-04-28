import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = 'in28minutes';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin(){
    // console.log(this.userName);
    if(this.userName === 'in28minutes' && this.password === 'dummy'){
      this.router.navigate(['welcome', this.userName]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
