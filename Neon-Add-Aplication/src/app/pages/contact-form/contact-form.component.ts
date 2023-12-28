import { Component } from '@angular/core';
import { RouterOutlet,RouterLink} from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [RouterLink,RouterOutlet,ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  myForm = new FormGroup({
    userName: new FormControl('',Validators.required),
    userLastName: new FormControl('',Validators.required),
    userEmail: new FormControl('',Validators.required),
    userPhone:new FormControl('',Validators.required),
  })



onSubmit(){
  console.log(this.myForm.value);
}
}
