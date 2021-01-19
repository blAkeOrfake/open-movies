import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MovieStorageService } from '../movie-storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchValueChanged = new EventEmitter();
  public movieTypes = ['All', 'Movie', 'Series', 'Episode'];

  public searchInput: string;
  public yearInput: number;
  public typeInput: string = this.movieTypes[0];

  constructor(private movieStorageService: MovieStorageService) {}

  ngOnInit(): void {
    this.searchInput = this.movieStorageService.getLastSearchFromStorage();
    this.yearInput = +this.movieStorageService.getLastYearSearchFromStorage() || undefined;
    this.typeInput = this.movieStorageService.getLastTypeSearchFromStorage() || this.movieTypes[0];
  }

  public handleSubmit() {
    this.movieStorageService.saveSearchToStorage(this.searchInput);
    this.movieStorageService.saveLastYearSearchToStorage(this.yearInput);
    this.movieStorageService.saveLastTypeSearchToStorage(this.typeInput);
    this.searchValueChanged.emit();
  }
}
