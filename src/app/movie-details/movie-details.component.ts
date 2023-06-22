import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private queryService: QueryService,
		private movieStorageService: MovieStorageService
	) {
		this.p = this.movieStorageService.getLastPaginationFromStorage();
	}

	ngOnInit(): void {
		this.watchedMovies = this.movieStorageService.getMoviesFromStorage()?.filter(x => !!x.title && x.title !== 'unknown');
		const imdbID = this.route.snapshot.queryParamMap.get('id');

		this.queryService.getMovies(true, imdbID).subscribe(data => {
			this.movie = data;
			console.log('movie', this.movie);
			this.movieStorageService.setCurrentMovie(this.movie);
			this.movieStorageService.addMovieToStorage(data?.Title || 'unknown', data?.Poster || 'unknown', data?.imdbID);
		})
	}

	ratingStars(): {full: boolean}[] {
		const stars = [];
		for (let i = 0; i < 5; i++) {
			stars.push({full: i < this.calculateRating(this.movie?.Ratings as {Source: string, Value: string}[])});
		}
		console.log('stars', stars);
		return stars;
	}

	calculateRating(ratings: {Source: string, Value: string}[]) {
		if (!ratings) return 0;
		let rating = 0;

		for (const r of ratings) {
			if (r.Source === 'Internet Movie Database') {
				rating = +r.Value.split('/')[0];
			}
			if (r.Source === 'Rotten Tomatoes') {
				rating += +r.Value.split('%')[0] / 10;
			}
			if (r.Source === 'Metacritic') {
				rating += +r.Value.split('/')[0] / 10;
			}
		}
		// average ratings
		rating = rating / 3;
		return rating / 2;
	}

	goBack(): void {
		// window.history.back();
		this.router.navigate(['/']);
	}

	buyTicket(): void {
		this.router.navigate(['buyTicket'], { queryParams: { id: this.movie?.imdbID}})
	}
}
