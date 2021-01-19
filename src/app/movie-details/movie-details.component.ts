import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieStorageService } from '../movie-storage.service';
import { QueryService } from '../query.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  public movie: Movie;
  public watchedMovies: Array<{
    poster: string;
    title: string;
  }> = [];
  private p: number;

  constructor(private route: ActivatedRoute,
              private queryService: QueryService,
              private movieStorageService: MovieStorageService) {
                this.p = this.movieStorageService.getLastPaginationFromStorage();
              }

  ngOnInit(): void {
    this.watchedMovies = this.movieStorageService.getMoviesFromStorage();
    let imdbID = this.route.snapshot.queryParamMap.get('id');

    this.queryService.getMovies(true, imdbID).subscribe(data => {
      this.movie = data;
      this.movieStorageService.addMovieToStorage(data.Title, data.Poster);
    })
    
  }

}
