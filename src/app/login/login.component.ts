import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { HardCodedAuthenticationService } from 'src/app/service/hard-coded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { error } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  constructor(private router: Router, private hardAuthService: HardCodedAuthenticationService,
    private basicAuthService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.userName);
    if (this.hardAuthService.authenticate(this.userName, this.password)) {
      this.handleSucessLogin();
    } else {
      this.handleFailLogin();
    }
  }

  handleBasicAuthLogin() {
    this.basicAuthService.executeBasicAuthService(this.userName, this.password).subscribe(
      data => {
        // console.log(data);
        this.handleSucessLogin();
      },
      // tslint:disable-next-line: no-shadowed-variable
      error => {
        console.log(error);
        this.handleFailLogin();
      }
    );
  }

  handleSucessLogin() {
      console.log('route success');
      this.router.navigate(['welcome', this.userName]);
      this.invalidLogin = false;
  }

  handleFailLogin() {
    console.log('fail');
    this.invalidLogin = true;
  }
}
