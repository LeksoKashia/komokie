import { Component, HostListener, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { LoginComponent } from '../../core/components/login/login.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  authService = inject(AuthService);
  currentUser: { email: string | null, username: string | null } | null = null;
  isScrolled = false;

  ngOnInit(): void {
    this.authService.user$.subscribe(user =>{
      if(user){
        this.authService.currentUserSignal.set({
          email: user.email!,
          username: user.displayName!
        })
        this.currentUser = {
          email: user.email!,
          username: user.displayName!
        };
      }else{
        this.authService.currentUserSignal.set(null);
        this.currentUser = null;

      }
      console.log(this.authService.currentUserSignal());
      
    })
  }

  logout(): void {
    this.authService.logout()
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 0;
    console.log("aeee");
    
  }
}
