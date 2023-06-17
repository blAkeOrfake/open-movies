import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieStorageService } from '../movie-storage.service';
import { QueryService } from '../query.service';

export interface CardInterface {
  imgSrc: string;
  title: string;
  description: string;
  imdbID: string;
  type: string;
}
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  @Input() searchInput: string;

  public cardList: CardInterface[] = [];
  public p: number;
  public total: number = 0;

  constructor(
              private queryService: QueryService,
              private movieStorageService: MovieStorageService,
              private router: Router,
              private cRef: ChangeDetectorRef) {}

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
    this.router.navigateByUrl(`/details`, /* Removed unsupported properties by Angular migration: queryParams. */ {});
  }

  public searchValueChanged() {
    this.loadMovies();
  }

  public pageChanged(event: number) {
    this.p = event;
    
    this.movieStorageService.savePaginationToStorage(this.p);
    this.loadMovies();
  }
}
