import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InventoryTabComponent} from "./inventory-tabs/tab.component";
import {InventoryComponent} from "./inventory.component";

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      {
        path: 'list',
        component: InventoryTabComponent,
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule { }
