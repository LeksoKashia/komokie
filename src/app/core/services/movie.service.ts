import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  http = inject(HttpClient);

  fetchMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(`${environment.baseUrl_api}/discover/movie`)
      .pipe(
        tap(console.log),
        map((response) => response.results)
      );
  }

  getMovieDetails(data: Movie): Observable<Movie> {
    return this.http.get<Movie>(`${environment.baseUrl_api}/movie/${data}`);
  }
}
