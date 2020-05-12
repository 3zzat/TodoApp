import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    // console.log('hello');
  }


  executeHelloWorldBeanServiceWithPathVariable(name) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({Authorization: basicAuthHeaderString});
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean/${name}`
    // , {headers}
    );
    // console.log('hello');
  }

  // createBasicAuthenticationHttpHeader() {
  //   let userName = 'in28minutes';
  //   let password = 'dummy';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(userName + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
