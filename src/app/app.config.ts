import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import {provideFirebaseApp, initializeApp} from '@angular/fire/app';
import {provideAuth, getAuth} from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCXvnStzdXwglvWzaTezbT92fQWH7pSBOA",
  authDomain: "auth-5fa54.firebaseapp.com",
  projectId: "auth-5fa54",
  storageBucket: "auth-5fa54.appspot.com",
  messagingSenderId: "185035465419",
  appId: "1:185035465419:web:9206b153720b5a7510714e"
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideFirebaseApp(()=>initializeApp(firebaseConfig)), provideAuth(()=>getAuth())]
};
