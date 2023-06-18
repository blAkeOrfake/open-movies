import { ChangeDetectorRef, Component } from '@angular/core';
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
export class MoviesListComponent {

	_searchInput: string;
	loading = false;
	// @Input() set searchInput(value: string) {
	// 	this._searchInput = value;
	// 	this.loadMovies();
	// };
	get searchInput(): string {
		return this._searchInput;
	}

	public cardList: CardInterface[] = [];
	public p: number;
	public total = 0;

	constructor(
		private queryService: QueryService,
		private movieStorageService: MovieStorageService,
		private router: Router,
		private cRef: ChangeDetectorRef) {}


	private generateCards(movies: any) {
		if (!movies) return;

		this.p = this.movieStorageService.getLastPaginationFromStorage();
		
		for (const movie of movies) {
			this.cardList.push({
				imgSrc: movie.Poster,
				title: movie.Title,
				description: movie.Year,
				imdbID: movie.imdbID,
				type: movie.Type
			});
		}
		this.loading = false;
		this.cRef.detectChanges();    
	}

	private loadMovies() {
		this.cardList = [];
		this.loading = true;
		this.queryService.getMovies(false).subscribe(data => {
			this.total = data.totalResults;
			this.generateCards(data.Search);
		}, error => {
			this.loading = false;
			console.warn(error);
		});
	}

	public goToDetails(imdbID: string) {
		this.router.navigateByUrl(`/details`, /* Removed unsupported properties by Angular migration: queryParams. */ {});
	}

	public searchValueChanged(searchInputValue: string) {
		this._searchInput = searchInputValue;
		this.loadMovies();

		document.getElementById('search-results-box').scrollIntoView( {behavior: 'smooth'});
	}

	public pageChanged(event: number) {
		this.p = event;
		
		this.movieStorageService.savePaginationToStorage(this.p);
		this.loadMovies();
	}
}
