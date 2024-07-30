import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Movie } from '../../core/models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  
  constructor(private router: Router) {}

  navigateToMovieDetails(movieId: number) {
    this.router.navigate(['/movie', movieId]);
  }
}
