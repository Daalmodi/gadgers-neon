import { Component } from '@angular/core';
import { FeaturesService } from '../../services/features.service';
@Component({
  selector: 'app-fonts',
  standalone: true,
  imports: [],
  templateUrl: './fonts.component.html',
  styleUrl: './fonts.component.scss'
})
export class FontsComponent {
  constructor(public featuresService:FeaturesService){}
fontChange(font:string): void{
  this.featuresService.setFonts(font);
}
}
