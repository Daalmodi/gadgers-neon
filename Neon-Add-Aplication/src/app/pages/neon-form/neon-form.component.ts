import { Component,OnInit } from '@angular/core';
import { RouterOutlet,RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';
import { NeonText } from '../../models/neonText.model';
import { FormsModule } from '@angular/forms';
import { CustomNeonComponent } from '../../components/custom-neon/custom-neon.component';
import {FeaturesService} from '../../services/features.service';
@Component({
  selector: 'app-neon-form',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FormsModule,CustomNeonComponent],
  templateUrl: './neon-form.component.html',
  styleUrl: './neon-form.component.scss'
})
export class NeonFormComponent implements OnInit {
  userInput:NeonText = { text: '' };

  constructor(public featuresService:FeaturesService){}
//fontStyle
  fontStyle:Record<string,string>={
    'font-family':"'Montserrat', sans-serif",
    'text-shadow': '0 0 15px red, 0 0 30px red,0 0 50px red',
   };


   changeFonts(): void{
    this.featuresService.getFonts().subscribe(font => {
      if(font === 'pacifico'){
        this.fontStyle['font-family']="'Pacifico', cursive";
      }
      if(font === 'montserrat'){
        this.fontStyle['font-family']="'Montserrat', sans-serif";
      }
      if(font === 'caveat'){
        this.fontStyle['font-family']="'Caveat', cursive";
      }
      if(font === 'orbitron'){
        this.fontStyle['font-family']="'Orbitron', sans-serif";
      }
    });
   }


changeColor(): void {
 this.featuresService.getColors().subscribe(color => {
      if(color === 'red'){
        this.fontStyle['text-shadow']="0 0 15px red, 0 0 30px red,0 0 50px red";
        
        
      }
      if(color === 'blue'){
        this.fontStyle['text-shadow']="0 0 15px blue, 0 0 30px blue,0 0 50px blue";
      }
      if(color === 'orange'){
        this.fontStyle['text-shadow']="0 0 15px orange, 0 0 30px orange,0 0 50px orange";
      }

    });
}

  ngOnInit(): void {
    this.changeFonts();
    this.changeColor();
  }

onSubmit(){
console.log("Elemento enviado");
console.log(this.userInput.text);

// 
}






}
