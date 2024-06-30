// article.service.ts

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private activeArticleIndex: number = -1;
  activeArticleIndexChange: Subject<number> = new Subject<number>();

  constructor() { }

  getActiveArticleIndex(): number {
    return this.activeArticleIndex;
  }

  setActiveArticleIndex(index: number): void {
    this.activeArticleIndex = index;
    this.activeArticleIndexChange.next(index);
  }

  resetActiveArticle(): void {
    this.activeArticleIndex = -1;
    this.activeArticleIndexChange.next(-1);
  }
}
