import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieStorageService } from './movie-storage.service';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(
    private moviesService: MoviesService,
    private movieStorageService: MovieStorageService) {}

  public getMovies(searchById: boolean, id: string = undefined): Observable<any>{
    let search = this.movieStorageService.getLastSearchFromStorage();
    let page = this.movieStorageService.getLastPaginationFromStorage();
    let year = this.movieStorageService.getLastYearSearchFromStorage();
    let type = this.movieStorageService.getLastTypeSearchFromStorage();

    if (type === 'All') {type = ''};

    if (searchById) {
      return this.moviesService.get(`&i=${id}`);
    } else {
      return this.moviesService.get(`&s=${search}&page=${page}&y=${year}&type=${type}`);
    }
  }

}
