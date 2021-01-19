import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieStorageService } from '../movie-storage.service';
import { MoviesService } from '../movies.service';
import { QueryService } from '../query.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  @Input() searchInput: string;

  private movies: Array<Movie> = [];
  public cardList: CardInterface[] = [];
  public p: number;
  public total: number = 0;

  constructor(private moviesService: MoviesService,
              private queryService: QueryService,
              private movieStorageService: MovieStorageService,
              private router: Router,
              private cRef: ChangeDetectorRef) {
              }

  ngOnInit() {
    this.loadMovies();
  }

  private generateCards(movies: any) {
    this.p = this.movieStorageService.getLastPaginationFromStorage();

    for (let movie of movies) {
      this.cardList.push({
        imgSrc: movie.Poster,
        title: movie.Title,
        description: movie.Year,
        imdbID: movie.imdbID,
        type: movie.Type
      });
    };

    this.cRef.detectChanges();    
  }

  private loadMovies() {
    this.cardList = [];
    this.queryService.getMovies(false).subscribe(data => {
      this.total = data.totalResults;
      this.generateCards(data.Search);
    });
  }

  public goToDetails(imdbID: string) {
    this.router.navigateByUrl(`/details`, {queryParams: {imdbID: imdbID}});
  }

  public searchValueChanged() {
    this.loadMovies();
  }
  public pageChanged(event: number) {
    this.p = event;
    console.log('ustawiam paginację na', event);
    
    this.movieStorageService.savePaginationToStorage(this.p);
    this.loadMovies();
  }
}

export interface CardInterface {
  imgSrc: string;
  title: string;
  description: string;
  imdbID: string;
  type: string;
}
