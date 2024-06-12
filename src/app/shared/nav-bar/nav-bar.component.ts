import { Component, HostListener, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginComponent } from '../../auth/login/login.component';
import { RegistroComponent } from '../../auth/registro/registro.component';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, LoginComponent, RegistroComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  authService = inject (AuthService);

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,
        });
      } else {
        this.authService.currentUserSig.set(null);
      }
      console.log(this.authService.currentUserSig());
    });
  }

  logout(): void {
    this.authService.logout();
  }
  /*
  mostrarLoginComponente: boolean = false;
  mostrarRegistroComponente: boolean = false;

  mostrarLogin() {
    this.mostrarLoginComponente = true;
    this.mostrarRegistroComponente = false;
  }

  mostrarRegistro() {
    this.mostrarRegistroComponente = true;
    this.mostrarLoginComponente = false;
  }

  ocultarLogin() {
    this.mostrarLoginComponente = false;
  }

  ocultarRegistro(){
    this.mostrarRegistroComponente = false;
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('app-nav-bar')) {
      this.ocultarLogin();
      this.ocultarRegistro();
    }
  }
  */
}