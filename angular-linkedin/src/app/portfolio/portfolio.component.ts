import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  isActive : boolean = false
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentComponent.subscribe(activeComponent => {
      if (!this.isActive) {
        this.isActive = (activeComponent === 'Portfolio');
      }
    });
  }
}
