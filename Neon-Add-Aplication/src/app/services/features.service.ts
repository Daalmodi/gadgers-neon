import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  private fontsSubject: BehaviorSubject<string> = new BehaviorSubject<string>('pacifico');
  private colorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('red');
  private sizeSubject:BehaviorSubject<string> = new BehaviorSubject<string>('small');

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

  getSize():Observable<string>{
    return this.sizeSubject.asObservable();
  }
  setSize(size:string):void {
    this.sizeSubject.next(size);
  }
  
}
