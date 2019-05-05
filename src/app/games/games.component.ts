import { Component, OnInit } from '@angular/core';
import { GAMES } from '../mock-games';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games = GAMES;
  constructor() { }

  ngOnInit() {
  }

}