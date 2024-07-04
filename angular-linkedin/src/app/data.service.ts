import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private activeComponentName = new BehaviorSubject<string>("");
  currentComponent = this.activeComponentName.asObservable();
  

  setActiveComponent(component: string) {
    this.activeComponentName.next(component);
  }
}
