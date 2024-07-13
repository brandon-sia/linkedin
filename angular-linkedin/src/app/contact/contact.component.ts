import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, Input, ViewChild, input } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { collection, addDoc } from "firebase/firestore"; 
import { FirestoreService } from '../firestore.service';
import { FormsModule, NgForm } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor,NgIf,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  isActive : boolean = false;
  isMessageSent: boolean = false;
  isMessageFail = false;
  user : any = false;

  constructor(private dataService: DataService, private router: Router, private firestoreService: FirestoreService, private appComponent: AppComponent ) { 

    this.user = appComponent.user;
  }

  ngOnInit() {
    this.dataService.currentComponent.subscribe(activeComponent => {
    this.isActive = (activeComponent === 'contact');

    });

  }

  closeArticle(event: Event): void {
    event.stopPropagation(); // Prevent event from bubbling up
    this.router.navigate(['/']); // Redirect to home or another route
  }

  onArticleClick(event: Event): void {
    event.stopPropagation(); // Prevent event from bubbling up
  }
  
  async onSubmit(form: NgForm): Promise<void> {
    const { name, email, message } = form.value;

    if (form.valid) 
      {
        await addDoc(collection(this.firestoreService.db, "users"), {
          name: name,
          email: email,
          message: message
        }).then(() => {
          this.isMessageSent = true;
          this.isMessageFail = false;
          form.resetForm();
        }).catch(error => {
          this.isMessageFail = true;
          this.isMessageSent = false;
        });
      }
  }

  toggleComponent(component:string, event: Event) {
    event.preventDefault();
    this.router.navigate(['/' + component]);
    this.dataService.setActiveComponent(component);
  }



}
