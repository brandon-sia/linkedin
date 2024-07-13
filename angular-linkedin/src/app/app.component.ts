import { AfterViewInit, Component, HostListener, OnInit, ViewChild, viewChild } from '@angular/core';
import { Route, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { FirestoreService } from './firestore.service';

const provider = new GoogleAuthProvider();

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FooterComponent, HeaderComponent, NgIf]
})
export class AppComponent{

  isLoginVisible: boolean = true;
  isLoginSuccess: boolean | undefined;
  userEmail = '';

  title = 'angular-linkedin';
  user: any = '';
  auth: any;

  constructor(private router: Router, private firestoreService: FirestoreService){
    this.auth = firestoreService.auth;
  }

  isPlainRoute(): boolean {
    return this.router.url === '/';
  }

  isUser(): boolean {
    return this.user != '';
  }
  
  googleLogIn(): Promise<void>{

    return signInWithPopup(this.auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        // The signed-in user info.
        const user = result.user;
        this.user = user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  googleSignOut(): Promise<void>{

    return signOut(this.auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });

  }


}
