import { CommonModule, NgFor, NgIf } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private dataService: DataService, private router: Router, private renderer: Renderer2) { }

  isPlainRoute(): boolean {
    return this.router.url === '/';
  }

  toggleComponent(component:string, event: Event) {
    event.preventDefault();
    this.router.navigate(['/' + component]);
    this.dataService.setActiveComponent(component);
  }

  

}
