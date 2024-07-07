import { AfterViewInit, Component, HostListener, OnInit, ViewChild, viewChild } from '@angular/core';
import { Route, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { NgIf } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FooterComponent, HeaderComponent, NgIf, LoginComponent]
})
export class AppComponent implements OnInit{

  isLoginVisible: boolean = true;
  isLoginSuccess: boolean | undefined;
  userEmail = '';

  title = 'angular-linkedin';

  constructor(private router: Router, private authService: AuthService){}

  isPlainRoute(): boolean {
    return this.router.url === '/';
  }

  ngOnInit() {
    this.authService.getLoginStatus().subscribe(status => {
      this.isLoginSuccess = status;
    });
    this.authService.getUser().subscribe(user => {
      this.userEmail = user;
    });
  }

  showLogin() {
    this.isLoginVisible = true;
  }

  // login() {
  //   const isLoginSuccess = true; // Simulated login status
  //   console.log('Emitting login status:', isLoginSuccess); // Debug log
  //   this.authService.setLoginStatus(isLoginSuccess);
  //   this.isLoginVisible = false; // Hide login component after successful login
  // }

}
