import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { DataService } from '../data.service';
import { GoogleAuthProvider, UserCredential } from "firebase/auth";
import { FirestoreService } from '../firestore.service';
import { FirebaseError } from 'firebase/app';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  auth: any;

  constructor(private dataService: DataService, private router: Router, private firestoreService: FirestoreService) 
  {
    this.auth = firestoreService.auth;
  }

  isPlainRoute(): boolean {
    return this.router.url === '/';
  }

  toggleComponent(component:string, event: Event) {
    event.preventDefault();
    this.router.navigate(['/' + component]);
    this.dataService.setActiveComponent(component);
  }

  

}
