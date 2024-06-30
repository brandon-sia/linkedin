import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, Input, ViewChild, input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  isActive : boolean = false
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentComponent.subscribe(activeComponent => {
      if (!this.isActive) {
        this.isActive = (activeComponent === 'Contact');
      }
    });
  }

}
