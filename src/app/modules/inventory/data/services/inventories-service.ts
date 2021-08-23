import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Inventory} from "./inventory.model";

@Injectable()
export class InventoriesService {

  jsonUrl = '../../../assets/data.json';

  constructor(public http: HttpClient) {}

  getInventories(){
    return this.http.get<any>(this.jsonUrl)
      .toPromise()
      .then(res => <Inventory[]>res.data)
      .then(data => { return data; });
  }
}
