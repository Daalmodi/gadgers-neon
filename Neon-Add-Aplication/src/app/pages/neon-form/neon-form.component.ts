import { Component,Input,OnInit } from '@angular/core';
import { RouterOutlet,RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';
import { NeonText } from '../../models/neonText.model';
import { FormsModule } from '@angular/forms';
import { CustomNeonComponent } from '../../components/custom-neon/custom-neon.component';
import {FeaturesService} from '../../services/features.service';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
@Component({
  selector: 'app-neon-form',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FormsModule,CustomNeonComponent],
  templateUrl: './neon-form.component.html',
  styleUrl: './neon-form.component.scss'
})
export class NeonFormComponent implements OnInit {
  userInput:NeonText = { text: '' };
// list of form 
userCustom ={
  userinput:'',
  userfont:'',
  usercolor:'',
  usersize:'',
}

  

  constructor(public featuresService:FeaturesService){}
//fontStyle
  fontStyle:Record<string,string>={
    'font-family':"'Montserrat', sans-serif",
    'text-shadow': '0 0 15px red, 0 0 30px red,0 0 50px red',
    
   };
   boxStyle:Record<string,string>={
    'box-shadow': 'inset 0 0 5px red,0 0 10px red',
   }

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
      this.userCustom.userfont=font;
    });
   }


changeColor(): void {
 this.featuresService.getColors().subscribe(color => {
      if(color === 'red'){
        this.fontStyle['text-shadow']="0 0 15px red, 0 0 30px red,0 0 50px red";
        this.boxStyle['box-shadow']="inset 0 0 5px red,0 0 10px red";
        
      }
      if(color === 'blue'){
        this.fontStyle['text-shadow']="0 0 15px blue, 0 0 30px blue,0 0 50px blue";
        this.boxStyle['box-shadow']="inset 0 0 5px blue,0 0 10px blue";
      }
      if(color === 'orange'){
        this.fontStyle['text-shadow']="0 0 15px orange, 0 0 30px orange,0 0 50px orange";
        this.boxStyle['box-shadow']="inset 0 0 5px orange,0 0 10px orange";
      }
      this.userCustom.usercolor=color;
    });
}

changeSize():void {
  this.featuresService.getSize().subscribe(size =>{
    if(size === 'small'){
      console.log('small');
    }
    if(size === 'medium'){
      console.log("medium");
    }
    if(size === 'large'){
      console.log("large");
    }
    this.userCustom.usersize=size;
  });
}

  ngOnInit(): void {
    this.changeFonts();
    this.changeColor();
    this.changeSize();
  }

onSubmit(){

this.userCustom.userinput=this.userInput.text;



console.log(this.userCustom);

console.log(this.userInput.text);


// 
}






}
