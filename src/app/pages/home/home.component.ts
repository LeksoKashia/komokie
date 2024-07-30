import { ChangeDetectionStrategy, Component, HostListener, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { LoginComponent } from '../../core/components/login/login.component';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../core/services/movie.service';
import { Movie } from '../../core/models/movie.model';
import { MovieCardComponent } from '../../shared/movie-card/movie-card.component';
import { ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LoginComponent, MovieCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  authService = inject(AuthService);
  movieService = inject(MovieService);
  router = inject(Router);
  cdr = inject(ChangeDetectorRef);
  currentUser: { email: string | null, username: string | null } | null = null;
  isScrolled = false;
  movies: Movie[] = [];

  ngOnInit(): void {
    this.loadMovies();

    this.authService.user$.subscribe(user => {
      if (user) {
        this.authService.currentUserSignal.set({
          email: user.email!,
          username: user.displayName!
        });
        this.currentUser = {
          email: user.email!,
          username: user.displayName!
        };
      } else {
        this.authService.currentUserSignal.set(null);
        this.currentUser = null;
      }
    });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd && this.router.url === '/')
    ).subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  loadMovies(): void {
    this.movieService.fetchMovies().subscribe(data => {
      this.movies = data;
      this.cdr.markForCheck();
    });
  }

  logout(): void {
    this.authService.logout();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 0;
  }
}
