import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {
  @Input() idHotel: String;
  @Input() nameHotel: String;
  @Input() numberStars: Number;
  @Input() amenities: any;
  @Input() price: Number;
  @Input() coin: String;
  @Input() imageHotel: String;

  starArray: any;

  constructor(
  ) {

  }

  ngOnInit(): void {
    if (this.numberStars) {
      this.starArray = Array(this.numberStars).fill(this.numberStars).map((x, i) => i);
    }
    if (!this.coin) {
      this.coin = 'ARS';
    }
  }

}
