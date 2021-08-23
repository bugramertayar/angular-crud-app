import {Component, OnInit, ViewChild} from '@angular/core';
import {LazyLoadEvent, PrimeNGConfig} from 'primeng/api';
import {Table} from 'primeng/table';
import {InventoriesService} from "../data/services/inventories-service";
import {Inventory} from "../data/services/inventory.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // Table variables
  @ViewChild('dt') table: Table | undefined;

  inventories: Inventory[] = [];
  drawerInventoryAdd = false;
  drawerInventoryEdit = false;
  // @ts-ignore
  inventoryToSend;

  constructor(
    private primengConfig: PrimeNGConfig,
    private inventoriesService: InventoriesService,
  ){
    this.primengConfig.ripple = true;
  }

  ngOnInit() {
    this.inventoriesService.getInventories().then(data => this.inventories = data);
  }


  // Add Drawer Functions Start
  changeDrawerAdd(val: boolean) {
    this.drawerInventoryAdd = val;
  }

  refreshAfterInventoryAddSubmit(val: any) {
    if (val){
      this.inventories.push(val);
    }
  }
  // Add Drawer Functions End


  // Edit Drawer Functions Start

  changeDrawerEdit(val: boolean) {
    this.drawerInventoryEdit = val;
  }

  changeDrawerInventoryEdit(obj: string) {
    this.inventoryToSend = obj;
    this.drawerInventoryEdit = !this.drawerInventoryEdit;
  }

  refreshAfterInventoryEditSubmit(val: any) {
    if (val){
      for (let [index, item] of this.inventories.entries()){
        if (item.id === val.id){
          this.inventories[index] = val;
          break;
        }
      }
    }
  }

  // Edit Drawer Functions End

}
