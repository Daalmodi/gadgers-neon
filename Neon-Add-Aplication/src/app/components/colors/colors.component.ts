import { Component } from '@angular/core';
import { FeaturesService } from '../../services/features.service';
@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.scss'
})
export class ColorsComponent {
  constructor(public featuresService:FeaturesService){}
  colorChange(color:string): void{
    this.featuresService.setColors(color);
    
    
  }
}
