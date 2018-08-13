import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss']
})
export class SearchFiltersComponent {
  @Output() filter: EventEmitter<any> = new EventEmitter<any>();

  hotelName: String

  constructor(
  ) {
  }

  filterByName() {
    this.filter.emit({ type: 'name', filter: this.hotelName });
  }
  filterByStar(star) {
    this.filter.emit({ type: 'star', filter: star });
  }

}
