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

  loadInventory(event: LazyLoadEvent) {
        const sorting = event.sortField;
        const sortOrder = event.sortOrder;
        if (sorting) { // Sorting Table
          if (sortOrder === 1){
            // @ts-ignore
            this.inventories = this.inventories.sort((a,b) => (a[sorting] > b[sorting]) ? 1 : ((b[sorting] > a[sorting]) ? -1 : 0));
          }else if(sortOrder === -1){
            // @ts-ignore
            this.inventories = this.inventories.sort((a,b) => (a[sorting] > b[sorting]) ? -1 : ((b[sorting] > a[sorting]) ? 1 : 0));
          }
        }
        else { // Filter Table
              // @ts-ignore
              if (event.filters.brand[0].value){
                // @ts-ignore
                this.inventories = this.inventories.filter(inventory => inventory.brand.includes( event.filters.brand[0].value));
              }
              // @ts-ignore
              if (event.filters.category[0].value){
                // @ts-ignore
                this.inventories = this.inventories.filter(inventory => inventory.category.includes( event.filters.category[0].value));
              }
              // @ts-ignore
              if (event.filters.name[0].value){
                // @ts-ignore
                this.inventories = this.inventories.filter(inventory => inventory.name.includes( event.filters.name[0].value));
              }
          }
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
      let updatedInventory = this.inventories.find(inventory => inventory.id === val.id);
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
