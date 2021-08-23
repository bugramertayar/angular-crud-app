import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-inventory-tabs',
  templateUrl: './tab.component.html',
})
export class InventoryTabComponent implements OnInit, OnChanges {
  // Inputs
  @Input() isTableOrCalendar: string | undefined;

  allModelsUnique: any;

  // List Tabs
  tabs = {
    DUMMY: 0,
    HTTP: 1,
  };

  // active tab;
  activeTabId = 0;


  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  changeListTab(tabId: number) {
    this.activeTabId = tabId;
  }
}
