import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../providers/hotel.service';

@Component({
  templateUrl: './hotel-search.html',
  styleUrls: ['./hotel-search.scss']
})

export class HotelSearch implements OnInit {
  hotels: any
  query: any;
  constructor(
    private hotelService: HotelService
  ) {
    this.query = { name: undefined, stars: undefined };
  }

  loadHotels(): void {
    this.hotelService.findHotels(this.query)
      .then(hotels => {
        this.hotels = hotels.docs;
      })
  }

  ngOnInit(): void {
    this.loadHotels();
  }

  changeFilters(_filter: any) {
    if (_filter.type === 'name') {
      this.query.name = _filter.filter;
    }
    if (_filter.type === 'star') {
      this.query.stars = _filter.filter;
    }
    this.loadHotels();
  }
}
