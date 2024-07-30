import { Component } from '@angular/core';
import { Movie } from '../../core/models/movie.model';
import { MovieService } from '../../core/services/movie.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {
  movie!: Movie;

  constructor(private movieService: MovieService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getparamid#');

    this.getMovie(getParamId);
  }

  getMovie(id: any) {
    this.movieService.getMovieDetails(id).subscribe((movie) => {
      console.log(movie, 'getmoviedetails#');
      this.movie = movie;
    });
  }
}
