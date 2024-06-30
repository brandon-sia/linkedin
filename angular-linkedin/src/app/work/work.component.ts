import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {

  isActive : boolean = false
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentComponent.subscribe(activeComponent => {
      if (!this.isActive) {
        this.isActive = (activeComponent === 'Work');
      }
    });
  }

}
