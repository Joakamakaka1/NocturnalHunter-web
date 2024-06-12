import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideFirebaseApp ,initializeApp } from '@angular/fire/app'
import { provideHttpClient } from '@angular/common/http';
import {getAuth, provideAuth} from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAy5e6D39dWZIL4eC5wODTtVSetrnCyk2w",
  authDomain: "nocturnal-hunters.firebaseapp.com",
  projectId: "nocturnal-hunters",
  storageBucket: "nocturnal-hunters.appspot.com",
  messagingSenderId: "317269549250",
  appId: "1:317269549250:web:14a35608de8258212c5b5b"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([
      provideFirebaseApp(()=> initializeApp(firebaseConfig)),
      provideAuth(() => getAuth())
    ]),
  ],
};
