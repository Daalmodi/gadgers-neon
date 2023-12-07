import { Component } from '@angular/core';
import { RouterOutlet,RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';
import { NeonText } from '../../models/neonText.model';
import { FormsModule } from '@angular/forms';
import { CustomNeonComponent } from '../../components/custom-neon/custom-neon.component';
@Component({
  selector: 'app-neon-form',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FormsModule,CustomNeonComponent],
  templateUrl: './neon-form.component.html',
  styleUrl: './neon-form.component.scss'
})
export class NeonFormComponent {
userInput:NeonText = { text: '' };
fontStyle:Record<string,string>={
 'font-family':"'Montserrat', sans-serif",
};

onSubmit(){
console.log("Elemento enviado");
console.log(this.userInput.text);
// this.fontStyle['font-family']="'Pacifico', cursive";

}






}
