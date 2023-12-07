import { Component } from '@angular/core';
import {ColorsComponent} from '../colors/colors.component';
import { FontsComponent } from '../fonts/fonts.component';
import { SizeComponent } from '../size/size.component';
@Component({
  selector: 'app-custom-neon',
  standalone: true,
  imports: [ColorsComponent,FontsComponent,SizeComponent],
  templateUrl: './custom-neon.component.html',
  styleUrl: './custom-neon.component.scss'
})
export class CustomNeonComponent {
selectOption:string ='Fonts';

showInformation(option:string){
  this.selectOption =option;
}

}
