import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: 'registro', component: RegistroComponent},
    {path: 'login', component: LoginComponent}
];