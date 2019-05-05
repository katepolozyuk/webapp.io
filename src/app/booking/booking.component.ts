import { Component, OnInit } from '@angular/core';
import { DAYS } from '../march-days';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  weekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  days = DAYS;
  today = 11;
  
  constructor() { }

  ngOnInit() {
  }

}
