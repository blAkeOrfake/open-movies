import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NowShowingComponent } from './now-showing/now-showing.component';
import { SearchCategoriesComponent } from './search-categories/search-categories.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { TicketPurchaseComponent } from './ticket-purchase/ticket-purchase.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PurchaseFinalizedComponent } from './purchase-finalized/purchase-finalized.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    SearchComponent,
    MovieDetailsComponent,
    TopBarComponent,
    NowShowingComponent,
    SearchCategoriesComponent,
    LoaderComponent,
    TicketPurchaseComponent,
    PurchaseFinalizedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    LoaderComponent
  ]
})
export class AppModule { }
