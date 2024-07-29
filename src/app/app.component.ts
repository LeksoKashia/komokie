import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { LoginComponent } from './core/components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  http = inject(HttpClient);
  authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.user$.subscribe(user =>{
      if(user){
        this.authService.currentUserSignal.set({
          email: user.email!,
          username: user.displayName!
        })
      }else{
        this.authService.currentUserSignal.set(null);
      }
      console.log(this.authService.currentUserSignal());
      
    })
  }
  logout(): void {
    this.authService.logout()
  }
}
