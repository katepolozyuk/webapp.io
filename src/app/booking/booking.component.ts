import { Component, OnInit } from '@angular/core';
import { Day } from '../days';
import { DAYS } from '../mock-days';
import { toDate } from '@angular/common/src/i18n/format_date';

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
