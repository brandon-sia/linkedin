import { CommonModule, NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../data.service';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private dataService: DataService, private articleService: ArticleService) { }

  toggleComponent(component:string) {
    this.dataService.setActiveComponent(component);
  }

  activateArticle(index: number): void {
    this.articleService.setActiveArticleIndex(index);
  }


}
