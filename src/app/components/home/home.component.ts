import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from '../../auth/login/login.component';
import { RegistroComponent } from '../../auth/registro/registro.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    NavBarComponent,
    LoginComponent,
    RegistroComponent,
    RouterLink,
    FontAwesomeModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  //Scroll Up
  ngAfterViewInit(): void {
    window.addEventListener('scroll', () => {
      const btnUp = document.querySelector('.btnUp');
      if (btnUp) {
        if (window.scrollY > window.innerHeight) {
          btnUp.classList.add('show-btn');
        } else {
          btnUp.classList.remove('show-btn');
        }
      }
    });

    const btnUp = document.querySelector('.btnUp');
    if (btnUp) {
      btnUp.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
    }
  }
}
