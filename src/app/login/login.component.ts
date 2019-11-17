import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/Authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username = '';
  public password = '';

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {

  }

  login() {
    this.authenticationService.authenticate(this.username, this.password);
  }

  submit() {
    this.login();
/*
    window.alert('username and pass: ' + this.username + this.password);
*/
  }

}
