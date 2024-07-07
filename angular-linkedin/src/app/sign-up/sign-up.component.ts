import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, Auth } from "firebase/auth";
import { FirestoreService } from '../firestore.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  auth: any
  email: string = '';
  password: string = '';
  isSignUpSuccess = false;
  isSignUpFail = false;

  constructor(private router: Router, private firestoreService: FirestoreService) { 
    this.auth = firestoreService.auth;
  }


  closeArticle(event: Event): void {
    event.stopPropagation(); // Prevent event from bubbling up
    this.router.navigate(['/']); // Redirect to home or another route
  }


  signUp(): Promise<void> {
   return createUserWithEmailAndPassword(this.auth, this.email, this.password)
    .then((userCredential: { user: any; }) => {
      // Signed up 
      const user = userCredential.user;
      this.isSignUpSuccess = true;
      // ...
    })
    .catch((error: { code: any; message: any; }) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      this.isSignUpFail = true;
      // ..
    });
  }

}
