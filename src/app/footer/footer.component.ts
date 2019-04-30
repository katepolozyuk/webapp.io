import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  items = ["assets/img/facebook.png", "assets/img/twitter.png", "assets/img/instagram.png"];
  constructor() { }

  ngOnInit() {
  }

}
