import { Component, OnInit, Input} from '@angular/core';
import { Tab } from '../tab';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit{
  
  @Input('tabTitle') title: string;

  tabs:Tab[] = [];
  addTab(tab:Tab) {
    if (!this.tabs.length) {
      tab.selected = true;
    }
    this.tabs.push(tab);
  }

  selectTab(tab:Tab) {
    this.tabs.map((tab) => {
      tab.selected = false;
    })
    tab.selected = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
