import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  welcomeMessageFromService: string;
  errorInWelcomeServiceMessage: string;
  constructor(private route: ActivatedRoute, private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    // console.log(this.welcomeDataService.executeHelloWorldBeanService());
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    // console.log('last line of getWelcomeMessage');

  }

  getWelcomMessageWithPathVariable() {
    // console.log(this.welcomeDataService.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe());
    this.welcomeDataService.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }


  handleSuccessfulResponse(response) {
    // console.log(response);
    // console.log(response.message);

    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error) {
    this.errorInWelcomeServiceMessage = error.error.message;
  }

}
