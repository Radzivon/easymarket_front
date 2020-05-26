import {Component, OnInit} from '@angular/core';
import {TripService} from "../services/trip/trip.service";
import {Trip} from "../model/trip/trip";
import {TripEditService} from "../services/tripEdit/trip-edit.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-current-trip',
  templateUrl: './current-trip.component.html',
  styleUrls: ['./current-trip.component.css']
})
export class CurrentTripComponent implements OnInit {
  pageNumber = 0;
  pageSize = 4;
  sortBy = 'id';
  sortDirection = 'asc';
  trips: Array<Trip>;
  pages: Array<number>;

  constructor(private tripService: TripService, private tripEditService: TripEditService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCurrentTrips();
  }

  getCurrentTrips() {
    this.tripService.getCurrentTrips(this.pageNumber, this.pageSize, this.sortBy, this.sortDirection).subscribe(data => {
      const pageOrders = JSON.parse(data);
      this.trips = pageOrders.content;
      this.pages = new Array<number>(pageOrders.totalPages);
    }, error => {
      console.log(error.error.message);
    });
  }

  setPageNumber(i, event: any) {
    event.preventDefault();
    this.pageNumber = i;
    this.getCurrentTrips();
  }

  setPageSize(pageSize, event: any) {
    event.preventDefault();
    this.pageSize = pageSize;
    this.getCurrentTrips();
  }

  setSortBy(sortBy, event: any) {
    event.preventDefault();
    this.sortBy = sortBy;
    this.getCurrentTrips();
  }

  setSortDirection(sortDir, event: any) {
    event.preventDefault();
    this.sortDirection = sortDir;
    this.getCurrentTrips();
  }

  editTrip(trip: Trip) {
    this.tripEditService.tripForEdit = trip;
    this.router.navigate(
      ['/trip/edit/', trip.id]);
  }

  finishTrip(trip: Trip) {
    this.tripService.finishTrip(trip).subscribe(data => {
        this.getCurrentTrips();
      }
    );
  }
}
