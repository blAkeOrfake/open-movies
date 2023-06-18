import { Injectable } from '@angular/core';

class StorageMovieClass {
	title: string;
	poster: string;
}

@Injectable({
	providedIn: 'root'
})
export class MovieStorageService {

	public addMovieToStorage(titleParam: string, posterParam: string, imdbIdParam: string) {
		const savedMovies = [];
		savedMovies.push({title: titleParam, poster: posterParam, imdbID: imdbIdParam});
		let s: any = localStorage.getItem('savedMovies');

		if (s) {
			s = JSON.parse(s)
			for (const mov of s) {
				if (mov.title !== titleParam) {
					savedMovies.push(mov);
				}
			}
			localStorage.removeItem('savedMovies');
		}
		localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
	}

	public getMoviesFromStorage(): Array<StorageMovieClass> {
		return JSON.parse(localStorage.getItem('savedMovies'));
	}

	public savePaginationToStorage(currentPage: number) {
		localStorage.setItem('currentPage', currentPage.toString())
	}

	public getLastPaginationFromStorage(): number {
		return +localStorage.getItem('currentPage') || 1;
	}

	public saveSearchToStorage(search: string) {    
		localStorage.setItem('search', search);
	}
	public getLastSearchFromStorage() {    
		return localStorage.getItem('search') || 'spider';
	}

	public saveLastYearSearchToStorage(year: number) {
		if (year) {
			if (this.getLastYearSearchFromStorage() !== year) {
				this.savePaginationToStorage(1);
			}
			localStorage.setItem('year', year.toString());
		} else {
			localStorage.removeItem('year');
		}

	}
	public getLastYearSearchFromStorage() {
		return +localStorage.getItem('year') || '';
	}

	public saveLastTypeSearchToStorage(type: string) {
		if (type) {
			if (this.getLastTypeSearchFromStorage() !== type) {
				this.savePaginationToStorage(1);
			}
			localStorage.setItem('type', type);
		} else {
			localStorage.removeItem('type');
		}
	}

	public getLastTypeSearchFromStorage() {
		return localStorage.getItem('type') || undefined;
	}

}
