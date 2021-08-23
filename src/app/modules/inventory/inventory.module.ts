import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InventoryComponent} from './inventory.component';
import {InventoryRoutingModule} from './inventory-routing.module';
import {InventoryDataModule} from './data/inventory-data.module';


@NgModule({
  declarations: [InventoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    InventoryRoutingModule,
    InventoryDataModule,
    ReactiveFormsModule,
  ]
})
export class InventoryModule { }
