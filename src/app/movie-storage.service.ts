import { Injectable } from '@angular/core';

class StorageMovieClass {
  title: string;
  poster: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieStorageService {

  constructor() { }

  public addMovieToStorage(titleParam: string, posterParam: string) {
    let savedMovies = [];
    savedMovies.push({title: titleParam, poster: posterParam});
    let s: any = localStorage.getItem('savedMovies');

    if (s) {
      s = JSON.parse(s)
      for (let mov of s) {
        if (mov.title !== titleParam) {
          savedMovies.push(mov);
        }
      };
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
    console.log('lastpagination', localStorage.getItem('currentPage'));
    return +localStorage.getItem('currentPage') || 1;
  }

  public saveSearchToStorage(search: string) {
    console.log('zapisuje search', search);
    
    localStorage.setItem('search', search);
  }
  public getLastSearchFromStorage() {
    console.log('mam search z storage:', localStorage.getItem('search') || 'spider');
    
    return localStorage.getItem('search') || 'spider';
  }

  public saveLastYearSearchToStorage(year: number) {
    if (year) {
      if (this.getLastYearSearchFromStorage() !== year) {
        this.savePaginationToStorage(1);
      }
      localStorage.setItem('year', year.toString());
      console.log('zapisuje year', year);
    } else {
      localStorage.removeItem('year');
    }

  }
  public getLastYearSearchFromStorage() {
    console.log('mam year z storage', +localStorage.getItem('year') || '');
    return +localStorage.getItem('year') || '';
  }

  public saveLastTypeSearchToStorage(type: string) {
    if (type) {
      if (this.getLastTypeSearchFromStorage() !== type) {
        this.savePaginationToStorage(1);
      }
      localStorage.setItem('type', type);
      console.log('zapisuje type', type);
    } else {
      localStorage.removeItem('type');
    }
  }

  public getLastTypeSearchFromStorage() {
    console.log('mam type z storage', localStorage.getItem('type') || undefined);

    return localStorage.getItem('type') || undefined;
  }

}
