import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DataService } from '../data.service';
import { HeaderComponent } from '../header/header.component';
import { ArticleService } from '../article.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  @Input() index!: number;
  isActive : boolean = false
  private subscription!: Subscription;


  constructor(private dataService: DataService, private articleService: ArticleService) { }

  ngOnInit() {
    this.dataService.currentComponent.subscribe(activeComponent => {
      if (!this.isActive) {
        this.isActive = (activeComponent === 'Intro');
      }
    });

    this.isActive = this.articleService.getActiveArticleIndex() === this.index;
    this.subscription = this.articleService.activeArticleIndexChange.subscribe((index: number) => {
      this.isActive = this.index === index;
    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  close(){
    location.hash = ''
  }

  // implementation for view


}
  

