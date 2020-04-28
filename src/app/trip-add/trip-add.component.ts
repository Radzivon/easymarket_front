import {Component, OnInit} from '@angular/core';
import {Cargo} from "../model/cargo/cargo";
import {CargoService} from "../services/cargo/cargo.service";
import {CartService} from "../services/cart/cart.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Trip} from "../model/trip/trip";
import {TripService} from "../services/trip/trip.service";
import {City} from "../model/city/city";

@Component({
  selector: 'app-trip-add',
  templateUrl: './trip-add.component.html',
  styleUrls: ['./trip-add.component.css']
})
export class TripAddComponent implements OnInit {
  form: any;
  pageNumber = 0;
  pageSize = 20;
  sortBy = 'id';
  sortDirection = 'asc';
  cargos: Array<Cargo>;
  pages: Array<number>;
  cities: Array<City>;

  constructor(private cargoService: CargoService, private cartService: CartService, private tripService: TripService, private fb: FormBuilder) {
    this.form = this.fb.group({
      location: new FormControl('', [Validators.required, Validators.minLength(4)]),
      car: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }

  ngOnInit(): void {
    this.getFreeCargo();
    this.cities = this.cartService.cities;
  }

  getFreeCargo() {
    this.cargoService.getFreeCargo().subscribe(data => {
      const pageOrders = JSON.parse(data);
      this.cargos = pageOrders.content;
      this.pages = new Array<number>(pageOrders.totalPages);
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

  addToCart(cargo: Cargo) {
    console.log(cargo);
    this.cartService.addCargoToCart(cargo);

    this.cities = this.cartService.cities;
  }

  createTrip() {
    if (this.cartService.cargo.length != 0) {
      const newTrip = new Trip();
      newTrip.currentCity = this.getLocationControl().value;
      newTrip.car = this.getCarControl().value;
      newTrip.isPaid = false;
      newTrip.tripCondition = 'IN_PROCESS';
      newTrip.cities = this.cartService.cities;
      newTrip.cargo = this.cartService.cargo;

      this.tripService.saveTrip(newTrip);

      this.cartService.clear();
    } else {
      alert("You don't add any cargo");
    }
  }

  getLocationControl() {
    return this.form.get('location');
  }

  getCarControl() {
    return this.form.get('car');
  }

}
