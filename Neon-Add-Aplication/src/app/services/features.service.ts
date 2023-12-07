import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  private fontsSubject: BehaviorSubject<string> = new BehaviorSubject<string>('pacifico');
  // constructor() { }
  // fonts:string ='pacifico';
  getFonts(): Observable<string> {
    return this.fontsSubject.asObservable();
  }

  setFonts(font: string): void {
    this.fontsSubject.next(font);
    
    
  }
}
