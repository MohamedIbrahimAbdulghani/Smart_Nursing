import { IItems } from "./GeneralObject";
import { Injectable } from "@angular/core";
import { ApiConfig } from "./ApiConfig";
import { HttpClient } from "@angular/common/http";
import { Observable, observable } from "rxjs";

@Injectable()
export class Items {
  constructor(private _HttpClient: HttpClient) {}
  GetAllData():Observable <Array<IItems>> {
   return this._HttpClient.get<Array<IItems>>(ApiConfig.ServerUrl + ApiConfig.ItemApiEndPoint)
  }
  GetItems(): Observable<Array<IItems>> {
    return this._HttpClient.get<Array<IItems>>(ApiConfig.ServerUrl + ApiConfig.ItemApiEndPoint + "/PopularItems");
  }
}
