import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {

  isActive : boolean = false
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.currentComponent.subscribe(activeComponent => {
      if (!this.isActive) {
        this.isActive = (activeComponent === 'work');
      }
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
