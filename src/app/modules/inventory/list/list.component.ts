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
}
