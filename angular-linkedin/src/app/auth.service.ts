import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginStatus = new BehaviorSubject<boolean>(false);
  private user = new BehaviorSubject<string>("");

  constructor() {
    this.checkInitialLoginStatus();
  }

  setLoginStatus(status: boolean) {
    this.loginStatus.next(status);
    localStorage.setItem('isLoginSuccess', status.toString());
  }

  getLoginStatus() {
    return this.loginStatus.asObservable();
  }

  checkInitialLoginStatus() {
    const status = localStorage.getItem('isLoginSuccess') === 'true';
    this.loginStatus.next(status);
  }

  setUser(email: string) {
    this.user.next(email);
    localStorage.setItem('userEmail', email.toString());
  }

  getUser() {
    return this.user.asObservable();
  }

}
