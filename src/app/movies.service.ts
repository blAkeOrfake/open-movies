import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  public get(searchCase): Observable<any> {
    return this.http.get(
      environment.APIEndpoint + 
      "?apikey=" + environment.APIKey + 
      searchCase);
  }
}
