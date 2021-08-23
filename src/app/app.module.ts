import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InventoriesService} from "./modules/inventory/data/services/inventories-service";
import {HttpClientModule} from "@angular/common/http";
import {InventoriesHttpService} from "./modules/inventory/inventory-http/services/inventories-http-service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [InventoriesService, InventoriesHttpService ],
  bootstrap: [AppComponent],
})
export class AppModule { }
