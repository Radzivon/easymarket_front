import {Component, OnInit} from '@angular/core';
import {Trip} from "../model/trip/trip";
import {TripService} from "../services/trip/trip.service";

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  pageNumber = 0;
  pageSize = 20;
  sortBy = 'id';
  sortDirection = 'asc';
  trips: Array<Trip>;
  pages: Array<number>;

  constructor(private tripService: TripService) {
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
}
