import { Routes } from '@angular/router';
import { NeonFormComponent } from './pages/neon-form/neon-form.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'neon',component:NeonFormComponent},
    {path:'neon/contact',component:ContactFormComponent},
];
