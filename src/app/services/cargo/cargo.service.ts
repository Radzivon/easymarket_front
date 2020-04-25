import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  private baseUrl = 'http://localhost:8080/';
  private cargoAllUrl = 'cargo/all';
  private cargoAllByUserIdUrl = 'cargo/all?userId=';
  private cargoUrl = 'cargo/';
  private cargoAddUrl = 'cargo/add';
  private pageStr = 'page=';
  private pageSizeStr = 'pageSize=';
  private sortByStr = 'sortBy=';
  private order = 'order=';
  private and = '&';

  constructor(private http: HttpClient) {
  }

  getCargoAll(page: number, pageSize: number, sortBy: string, sortDir: string): Observable<string> {
    return this.http.get(this.baseUrl + this.cargoAllUrl
      + '?' + this.pageStr + page + this.and + this.pageSizeStr + pageSize + this.and + this.sortByStr + sortBy
      + this.and + this.order + sortDir, {responseType: 'text'});
  }

  getCargoAllByUserId(page: number, pageSize: number, sortBy: string, sortDir: string, userId: number): Observable<string> {
    return this.http.get(this.baseUrl + this.cargoAllByUserIdUrl
      + userId + this.and + this.pageStr + page + this.and + this.pageSizeStr + pageSize + this.and + this.sortByStr + sortBy
      + this.and + this.order + sortDir, {responseType: 'text'});
  }

  getCargoById(id: number) {
    return this.http.get(this.baseUrl + this.cargoUrl + id, {responseType: 'text'})
  }
}
