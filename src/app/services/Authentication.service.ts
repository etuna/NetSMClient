import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {Constants} from '../shared/Constants';
import {User} from '../model/User';  // Firebase modules for Database, Data list and Single object


@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient,
              private router: Router) {
  }

  public authenticate(username, password) {
    const url = Constants.AUTHENTICATE;
    const data = new FormData();
    data.append('username', username);
    data.append('password', password);
    return this.http.post<any>(url, data).toPromise().then(data => {
      if (data !== null) {
        if (data.PROFILE === 'ADMIN') {
          this.createSession(data);
          return this.router.navigate(['admin-dashboard']);
        } else {
          this.createSession(data);
          return this.router.navigate(['user-dashboard']);
        }
      } else {
        window.alert('Invalid username or password. Try again.');
        return null;
      }
    });

  }

  public createSession(data) {
    localStorage.setItem('currentUserId', data.id);
    localStorage.setItem('currentUserName', data.username);
  }

  public delSession(user) {
    localStorage.clear();
    localStorage.reload();
  }

  public addUser(user: User) {
    const url = Constants.ADD_USER;
    const data = new FormData();
    data.append('username', user.username);
    data.append('id', '');
    data.append('password', user.password);
    data.append('email', user.email);
    data.append('profile', user.profile);
    return this.http.post<any>(url, data).toPromise().then(data => {
      return window.alert(data.description);
    });
  }

  public delUser(userId) {
    const url = Constants.DEL_USER + '/' + userId;
    return this.http.get<any>(url).toPromise().then(data => {
      return window.alert(data.description);
    });
  }

  public getUsers() {
    const url = Constants.ALL_USERS;
    return this.http.get(url).toPromise().then(data => {
      return data;
    });
  }

}
