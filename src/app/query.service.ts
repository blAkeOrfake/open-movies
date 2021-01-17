import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private moviesService: MoviesService) { }

  public getMovies(search: string, searchById: boolean): Observable<any>{
    if (searchById) {
      return this.moviesService.get(`&i=${search}`);

    } else {
      return this.moviesService.get(`&s=${search}`);

    }
  }
}
