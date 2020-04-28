import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cargo} from "../../model/cargo/cargo";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  private baseUrl = 'http://localhost:8080/';
  private cargoAllUrl = 'cargo/all';
  private freeCargoUrl = 'cargo/free';
  private cargoAllByUserIdUrl = 'cargo/user/';
  private cargoUrl = 'cargo/';
  private deleteCargoUrl = 'cargo/delete/';
  private updateCargoUrl = 'cargo/update/';
  private cargoPaidUrl = 'cargo/paid/';
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
    //todo
    userId = 1;
    return this.http.get(this.baseUrl + this.cargoAllByUserIdUrl
      + userId + '?' + this.pageStr + page + this.and + this.pageSizeStr + pageSize + this.and + this.sortByStr + sortBy
      + this.and + this.order + sortDir, {responseType: 'text'});
  }

  getCargoById(id: number) {
    return this.http.get(this.baseUrl + this.cargoUrl + id, {responseType: 'text'})
  }

  setPaidByCargoId(id: number, isPaid: boolean) {
    return this.http.put(this.baseUrl + this.cargoPaidUrl + id, JSON.stringify(isPaid), {responseType: 'text'});
  }

  updateCargo(cargo: Cargo) {
    return this.http.put(this.baseUrl + this.updateCargoUrl + cargo.id, JSON.stringify(cargo));
  }

  saveCargo(cargo: Cargo) {
    return this.http.post(this.baseUrl + this.cargoAddUrl, JSON.stringify(cargo), httpOptions).subscribe();
  }

  deleteCargo(cargoId: number) {
    return this.http.delete(this.baseUrl + this.deleteCargoUrl + cargoId)
  }

  getFreeCargo(): Observable<string> {
    return this.http.get(this.baseUrl + this.freeCargoUrl, {responseType: 'text'});

  }
}
