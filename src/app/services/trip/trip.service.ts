import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Trip} from "../../model/trip/trip";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private baseUrl = 'http://localhost:8080/';
  private tripAllUrl = 'trip/all';
  private tripUrl = 'trip/';
  private tripCurrent = 'trip/current/';
  private tripAddUrl = 'trip/add';
  private tripEdit = 'trip/edit/';
  private tripFinishUrl = 'trip/finish/';
  private tripByCargo = 'trip/cargo/user';
  private pageStr = 'page=';
  private pageSizeStr = 'pageSize=';
  private sortByStr = 'sortBy=';
  private order = 'order=';
  private and = '&';

  constructor(private http: HttpClient) {
  }

  getTripAll(page: number, pageSize: number, sortBy: string, sortDir: string): Observable<string> {
    return this.http.get(this.baseUrl + this.tripAllUrl
      + '?' + this.pageStr + page + this.and + this.pageSizeStr + pageSize + this.and + this.sortByStr + sortBy
      + this.and + this.order + sortDir, {responseType: 'text'});
  }

  getTripByCargoOwner(page: number, pageSize: number, sortBy: string, sortDir: string) {
    return this.http.get(this.baseUrl + this.tripByCargo
      + '?' + this.pageStr + page + this.and + this.pageSizeStr + pageSize + this.and + this.sortByStr + sortBy
      + this.and + this.order + sortDir, {responseType: 'text'});
  }

  getTripById(id: number) {
    return this.http.get(this.baseUrl + this.tripUrl + id, {responseType: 'text'})
  }

  acceptTripAsPaid(trip: Trip) {
    return this.http.put(this.baseUrl + this.tripEdit + trip.id, trip);
  }

  getCurrentTrips(): Observable<string> {
    return this.http.get(this.baseUrl + this.tripCurrent, {responseType: 'text'})
  }

  editTrip(trip: Trip) {
    return this.http.put(this.baseUrl + this.tripEdit + trip.id, trip).subscribe();
  }

  saveTrip(trip: Trip) {
    return this.http.post(this.baseUrl + this.tripAddUrl, JSON.stringify(trip), httpOptions).subscribe();
  }
  finishTrip(trip: Trip) {
    return this.http.put(this.baseUrl + this.tripFinishUrl + trip.id, trip);
  }
}
