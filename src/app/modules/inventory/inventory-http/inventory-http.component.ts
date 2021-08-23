import {Component, OnInit, ViewChild} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {Table} from 'primeng/table';
import {InventoriesHttpService} from "./services/inventories-http-service";
import {ProductModel} from "./services/product.model";

@Component({
  selector: 'app-http-list',
  templateUrl: './inventory-http.component.html',
  styleUrls: ['./inventory-http.component.css']
})
export class InventoryHttpComponent implements OnInit {
  // Table variables
  @ViewChild('dt') table: Table | undefined;

  inventories: ProductModel[] = [];

  constructor(
    private primengConfig: PrimeNGConfig,
    private inventoriesHttpService: InventoriesHttpService,
  ){
    this.primengConfig.ripple = true;
  }

  ngOnInit() {
    this.inventoriesHttpService.get().subscribe(res => {
      this.inventories = res;
    });
  }

}
