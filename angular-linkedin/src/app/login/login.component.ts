import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirestoreService } from '../firestore.service';
import { NgIf } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  auth : Auth
  email: string = ''; 
  password: string = '';
  user : any = '';
  isLoginSuccess = false;
  isLoginFailed = false;

  @Output() loginStatusChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() userChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router, private firestoreService: FirestoreService, private authService: AuthService) { 
    this.auth = firestoreService.auth;
  }

  closeArticle(event: Event): void {
    event.stopPropagation(); // Prevent event from bubbling up
    this.router.navigate(['/']); // Redirect to home or another route
  }


  logIn(): Promise<void>
  {
    return signInWithEmailAndPassword(this.auth, this.email, this.password)
    .then((userCredential) => {
      // Signed in 
      this.user = userCredential.user.email;
      this.isLoginSuccess = true;
      this.authService.setLoginStatus(this.isLoginSuccess);
      this.authService.setUser(this.user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      this.isLoginFailed = true;
    });
  }

}
