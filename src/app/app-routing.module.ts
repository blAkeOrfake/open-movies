import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { TicketPurchaseComponent } from './ticket-purchase/ticket-purchase.component';


const routes: Routes = [
  { path: '', component: MoviesListComponent },
  { path: 'details', component: MovieDetailsComponent },
  { path: 'buyTicket', component: TicketPurchaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
