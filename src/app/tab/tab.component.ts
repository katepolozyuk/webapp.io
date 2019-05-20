import { Component, OnInit, Input } from '@angular/core';
import { Tab } from '../tab';
import { TabsComponent } from '../tabs/tabs.component';
 
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit, Tab {
  selected: boolean;
  @Input() tabTitle: string;
  

  constructor(private tabsComponent: TabsComponent) {
   }

  ngOnInit() {
    this.tabsComponent.addTab(this);
  }

}
