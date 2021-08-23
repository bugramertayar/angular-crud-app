import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class InventoriesHttpService {

  API_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(public http: HttpClient) {}

  get(headers?: HttpHeaders, params?: HttpParams): Observable<any> {
    return this.http.get(this.API_URL, {
      headers: headers,
      params: params
    }).pipe(map((value) => {
      return value;
    }));
  }

}
