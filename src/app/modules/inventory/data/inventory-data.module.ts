import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {ListComponent} from '../list/list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {CalendarModule} from "primeng/calendar";
import {SliderModule} from "primeng/slider";
import {MultiSelectModule} from "primeng/multiselect";
import {DialogModule} from "primeng/dialog";
import {ContextMenuModule} from "primeng/contextmenu";
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {InputTextModule} from "primeng/inputtext";
import {ProgressBarModule} from "primeng/progressbar";
import {AddComponent} from "../add/add.component";
import {EditComponent} from "../edit/edit.component";
import {InventoryTabComponent} from "../inventory-tabs/tab.component";
import {InventoryHttpComponent} from "../inventory-http/inventory-http.component";


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    EditComponent,
    InventoryTabComponent,
    InventoryHttpComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
  ],
  providers: [DatePipe],
  exports: [],
  entryComponents: []
})
export class InventoryDataModule {
}
