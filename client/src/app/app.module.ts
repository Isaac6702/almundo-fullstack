import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Routing Module
import { AppRoutingModule } from './app.routing';

//Layouts
import { SimpleLayoutPage } from './pages/layouts/simple-layout';

//Pages
import { HotelSearch } from './pages/hotel-search/hotel-search';

//Components
import { SearchFiltersComponent } from './components/search-filters/search-filters.component';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';

//Services
import { HotelService } from './providers/hotel.service';


@NgModule({
  declarations: [
    AppComponent,
    SimpleLayoutPage,
    HotelSearch,
    SearchFiltersComponent,
    HotelCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    HotelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
