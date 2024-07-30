import { Component, HostListener, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { LoginComponent } from '../../core/components/login/login.component';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../core/services/movie.service';
import { Movie } from '../../core/models/movie.model';
import { MovieCardComponent } from '../../shared/movie-card/movie-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LoginComponent, MovieCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  authService = inject(AuthService);
  movieService = inject(MovieService);
  currentUser: { email: string | null, username: string | null } | null = null;
  isScrolled = false;
  movies: Movie[] = [];


  ngOnInit(): void {
    this.movieService.fetchMovies().subscribe(data => {
      this.movies = data;

    });
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
    })
  }

  logout(): void {
    this.authService.logout()
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 0;
  }
}
