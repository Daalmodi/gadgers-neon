import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  private fontsSubject: BehaviorSubject<string> = new BehaviorSubject<string>('pacifico');
  private colorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('red');

  // constructor() { }
  // fonts:string ='pacifico';
  getFonts(): Observable<string> {
    return this.fontsSubject.asObservable();
  }

  setFonts(font: string): void {
    this.fontsSubject.next(font);
    
  }

  getColors():Observable<string>{
    return this.colorSubject.asObservable();
  }
  setColors(color:string):void {
    this.colorSubject.next(color);
    
    
  }
}
