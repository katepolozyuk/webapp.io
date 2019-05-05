import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  adress = "г. Киев ул. Киевская";
  phone = "+38089898989";
  email = "katepol@gmail.com";
  
  constructor() { }

  ngOnInit() {
  }

}
