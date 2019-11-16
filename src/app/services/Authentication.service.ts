import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';  // Firebase modules for Database, Data list and Single object


@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient,
              private router: Router) {
  }
  public authenticate(username, password){

  }
  public createSession(user){

  }
  public delSession(user){

  }

  public addUser(user){

  }
  public getUsers(){

  }

}
