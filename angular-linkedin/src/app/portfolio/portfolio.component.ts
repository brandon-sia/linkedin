import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  isActive : boolean = false
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.currentComponent.subscribe(activeComponent => {
      if (!this.isActive) {
        this.isActive = (activeComponent === 'portfolio');
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
