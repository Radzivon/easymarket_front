import {Component, OnInit} from '@angular/core';
import {CargoService} from "../services/cargo/cargo.service";
import {Cargo} from "../model/cargo/cargo";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {TripService} from "../services/trip/trip.service";
import {Trip} from "../model/trip/trip";

@Component({
  selector: 'app-cargo-owner',
  templateUrl: './cargo-owner.component.html',
  styleUrls: ['./cargo-owner.component.css']
})
export class CargoOwnerComponent implements OnInit {
  pageNumber = 0;
  pageSize = 20;
  sortBy = 'id';
  sortDirection = 'asc';
  cargos: Array<Cargo>;
  trips: Array<Trip>;
  pagesCargo: Array<number>;
  pagesTrip: Array<number>;
  userId: number;
  private routeSubscription: Subscription;
  active = 1;
  errorMessage: string;
  hasError: boolean;

  constructor(private cargoService: CargoService, route: ActivatedRoute, private tripService: TripService) {
    this.routeSubscription = route.params.subscribe(params => this.userId = params['userId']);
  }

  ngOnInit(): void {
    this.getCargo();
    this.getTrips();
  }

  getCargo() {
    this.cargoService.getCargoAllByUserId(this.pageNumber, this.pageSize, this.sortBy, this.sortDirection, this.userId).subscribe(data => {
        const pageOrders = JSON.parse(data);
        this.cargos = pageOrders.content;
        this.pagesCargo = new Array<number>(pageOrders.totalPages);
      }, error => {
        console.log(error.error.message);
      }
    );
  }

  getTrips() {
    this.tripService.getTripByCargoOwner('1', this.pageNumber, this.pageSize, this.sortBy, this.sortDirection).subscribe(data => {
        const pageOrders = JSON.parse(data);
        console.log('getTrips');
        console.log(pageOrders);
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
    this.getCargo();
  }

  setPageSize(pageSize, event: any) {
    event.preventDefault();
    this.pageSize = pageSize;
    this.getCargo();
  }

  setSortBy(sortBy, event: any) {
    event.preventDefault();
    this.sortBy = sortBy;
    this.getCargo();
  }

  setSortDirection(sortDir, event: any) {
    event.preventDefault();
    this.sortDirection = sortDir;
    this.getCargo();
  }

  editCargo(cargoId: number) {

  }

  deleteCargo(cargo: Cargo) {
    console.log(cargo);
    console.log(cargo.cargoCondition === 'FREE');
    if (cargo.cargoCondition === 'FREE') {
      this.cargoService.deleteCargo(cargo.id);
    }
  }
}
