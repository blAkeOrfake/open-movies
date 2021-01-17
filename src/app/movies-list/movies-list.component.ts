import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { QueryService } from '../query.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  constructor(private moviesService: MoviesService,
              private queryService: QueryService) { }

  ngOnInit() {
    console.log('startuję');
    
    this.queryService.getMovies('tt0948470', true).subscribe(data => {
      console.log('data', data);
    })
  }

}
