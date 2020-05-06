import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { HardCodedAuthenticationService } from 'src/app/service/hard-coded-authentication.service';

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
  constructor(private router: Router, private hardAuthService: HardCodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.userName);
    if (this.hardAuthService.authenticate(this.userName, this.password)) {
      this.router.navigate(['welcome', this.userName]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
