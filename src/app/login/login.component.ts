import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username = '';
  public password = '';

  constructor() {
  }

  ngOnInit() {

  }

  login() {

  }

  submit() {
    this.login();
/*
    window.alert('username and pass: ' + this.username + this.password);
*/
  }

}
