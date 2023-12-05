import { Component } from '@angular/core';
import { RouterOutlet,RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-neon-form',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './neon-form.component.html',
  styleUrl: './neon-form.component.scss'
})
export class NeonFormComponent {
onSubmit(){
console.log("Elemento enviado");
}
}
