import { Component, OnInit } from '@angular/core';
import { HardCodedAuthenticationService } from 'src/app/service/hard-coded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // isLoggedIn: boolean = false;

  constructor(public hardCodedAuth: HardCodedAuthenticationService) { }

  ngOnInit() {
    // this.isLoggedIn = this.hardCodedAuth.isUserLoggedIn();
  }

}
