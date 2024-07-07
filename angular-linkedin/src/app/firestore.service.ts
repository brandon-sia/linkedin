import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { environment } from '../environments/environment';
import { collection, addDoc } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  db:any
  auth:any

  constructor() { 

    // Initialize Firebase
    const app = initializeApp(environment.firebaseConfig);

    // Initialize Firebase Authentication and get a reference to the service
    this.auth = getAuth(app);

    // Initialize Cloud Firestore and get a reference to the service
    this.db = getFirestore(app);


  }


}
