import { Component, OnInit } from '@angular/core';
import { PRICE } from '../mock-price';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  price = PRICE;
  
  constructor() { }

  ngOnInit() {
  }

}
