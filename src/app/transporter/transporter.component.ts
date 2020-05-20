import {Component, OnInit} from '@angular/core';
import {Cargo} from "../model/cargo/cargo";
import {Trip} from "../model/trip/trip";
import {CargoService} from "../services/cargo/cargo.service";
import {TripService} from "../services/trip/trip.service";

@Component({
  selector: 'app-transporter',
  templateUrl: './transporter.component.html',
  styleUrls: ['./transporter.component.css']
})
export class TransporterComponent implements OnInit {
  pageNumber = 0;
  pageSize = 4;
  sortBy = 'id';
  sortDirection = 'asc';
  cargo: Array<Cargo>;
  trips: Array<Trip>;
  pagesCargo: Array<number>;
  pagesTrip: Array<number>;

  constructor(private cargoService: CargoService, private tripService: TripService) {
  }

  ngOnInit(): void {
    this.getFreeCargo();
  }

  getFreeCargo() {
    this.cargoService.getFreeCargo().subscribe(data => {
      const pageOrders = JSON.parse(data);
      this.cargo = pageOrders.content;
      this.pagesCargo = new Array<number>(pageOrders.totalPages);
    }, error => {
      console.log(error.error.message);
    });
  }

  setPageNumber(i, event: any) {
    event.preventDefault();
    this.pageNumber = i;
    this.getFreeCargo();
  }

  setPageSize(pageSize, event: any) {
    event.preventDefault();
    this.pageSize = pageSize;
    this.getFreeCargo();
  }

  setSortBy(sortBy, event: any) {
    event.preventDefault();
    this.sortBy = sortBy;
    this.getFreeCargo();
  }

  setSortDirection(sortDir, event: any) {
    event.preventDefault();
    this.sortDirection = sortDir;
    this.getFreeCargo();
  }
}
