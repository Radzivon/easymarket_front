import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TripService} from "../services/trip/trip.service";
import {Trip} from "../model/trip/trip";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-trip-by-cargo-owner',
  templateUrl: './trip-by-cargo-owner.component.html',
  styleUrls: ['./trip-by-cargo-owner.component.css']
})
export class TripByCargoOwnerComponent implements OnInit {
  pageNumber = 0;
  pageSize = 4;
  sortBy = 'id';
  sortDirection = 'asc';
  trips: Array<Trip>;
  pagesTrip: Array<number>;
  userId: number;
  private routeSubscription: Subscription;
  active = 1;
  errorMessage: string;
  hasError: boolean;

  constructor(route: ActivatedRoute, private tripService: TripService, private router: Router) {
    this.routeSubscription = route.params.subscribe(params => this.userId = params['userId']);
  }

  ngOnInit(): void {
    this.getTrips();
  }

  getTrips() {
    this.tripService.getTripByCargoOwner(this.pageNumber, this.pageSize, this.sortBy, this.sortDirection).subscribe(data => {
        const pageOrders = JSON.parse(data);
        this.trips = pageOrders.content;
        this.pagesTrip = new Array<number>(pageOrders.totalPages);
      }, error => {
        console.log(error.error.message);
      }
    );
  }

  setPageNumber(i, event: any) {
    event.preventDefault();
    this.pageNumber = i;
    this.getTrips();
  }

  setPageSize(pageSize, event: any) {
    event.preventDefault();
    this.pageSize = pageSize;
    this.getTrips();
  }

  setSortBy(sortBy, event: any) {
    event.preventDefault();
    this.sortBy = sortBy;
    this.getTrips();
  }

  setSortDirection(sortDir, event: any) {
    event.preventDefault();
    this.sortDirection = sortDir;
    this.getTrips();
  }
}
