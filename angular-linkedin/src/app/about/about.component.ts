import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DataService } from '../data.service';
import { HeaderComponent } from '../header/header.component';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  @Input() index!: number;
  @Input() isActive: boolean = false;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.currentComponent.subscribe(activeComponent => {
      this.isActive = (activeComponent === 'intro');
    });

  }

  closeArticle(event: Event): void {
    event.stopPropagation(); // Prevent event from bubbling up
    this.router.navigate(['/']); // Redirect to home or another route
  }

  onArticleClick(event: Event): void {
    event.stopPropagation(); // Prevent event from bubbling up
  }

  // implementation for view


}
  

