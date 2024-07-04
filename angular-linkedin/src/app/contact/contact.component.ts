import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, Input, ViewChild, input } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  isActive : boolean = false
  constructor(private dataService: DataService, private router: Router) { }

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

}
