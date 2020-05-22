import {Component, OnInit} from '@angular/core';
import {Trip} from "../model/trip/trip";
import {TripService} from "../services/trip/trip.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  pageNumber = 0;
  pageSize = 4;
  sortBy = 'id';
  sortDirection = 'asc';
  trips: Array<Trip>;
  pages: Array<number>;
  form: FormGroup;

  constructor(private tripService: TripService, private fb: FormBuilder) {
    this.form = this.fb.group({
      checkArray: this.fb.array([])
    })
  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.tripService.getTripAll(this.pageNumber, this.pageSize, this.sortBy, this.sortDirection).subscribe(data => {
        const pageOrders = JSON.parse(data);
        this.trips = pageOrders.content;
        this.pages = new Array<number>(pageOrders.totalPages);
      }, error => {
        console.log(error.error.message);
      }
    );
  }

  setPageNumber(i, event: any) {
    event.preventDefault();
    this.pageNumber = i;
    this.getOrders();
  }

  setPageSize(pageSize, event: any) {
    event.preventDefault();
    this.pageSize = pageSize;
    this.getOrders();
  }

  setSortBy(sortBy, event: any) {
    event.preventDefault();
    this.sortBy = sortBy;
    this.getOrders();
  }

  setSortDirection(sortDir, event: any) {
    event.preventDefault();
    this.sortDirection = sortDir;
    this.getOrders();
  }

  markTripAsPaid(trip) {
    const editedTrip = new Trip();
    editedTrip.isPaid = true;
    editedTrip.id = trip.id;
    editedTrip.currentCity = trip.currentCity;
    editedTrip.car = trip.car;
    editedTrip.tripCondition = trip.tripCondition;
    editedTrip.cities = trip.cities;
    this.tripService.acceptTripAsPaid(editedTrip).subscribe(
      data => {
        this.getOrders();
      }
    );
  }
}
