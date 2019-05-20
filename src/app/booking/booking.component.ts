import { Component, OnInit, NgModule } from '@angular/core';
import { MARCHDAYS } from '../march-days';
import { APRDAYS } from '../april-days';
import { FEBDAYS } from '../february-days';
import { NgForm} from '@angular/forms';
import { TabsComponent } from '../tabs/tabs.component';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})

export class BookingComponent implements OnInit {

  weekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  mdays = MARCHDAYS;
  fdays = FEBDAYS;
  adays = APRDAYS;
  today = 11;
  
  time = ["14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00", "18:00 - 19:00", "19:00 - 20:00"];
  sits = ["1", "2", "3", "4"];

  submit(form: NgForm){
    console.log(form);
    form.resetForm();
  }
 
  constructor() { }

  ngOnInit() {
  }

}
