import { Component } from '@angular/core';
import { FeaturesService } from '../../services/features.service';

@Component({
  selector: 'app-size',
  standalone: true,
  imports: [],
  templateUrl: './size.component.html',
  styleUrl: './size.component.scss'
})
export class SizeComponent {
  constructor(public featuresService:FeaturesService){}
  selectSize:string="";
  

sizePrint(option:string): void {
  
  this.selectSize=option;
  this.featuresService.setSize(option);
  
  
}
}
