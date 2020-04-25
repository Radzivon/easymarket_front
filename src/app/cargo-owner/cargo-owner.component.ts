import {Component, OnInit} from '@angular/core';
import {CargoService} from "../services/cargo/cargo.service";
import {Cargo} from "../model/cargo/cargo";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

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
  pages: Array<number>;
  userId: number;
  private routeSubscription: Subscription;

  constructor(private cargoService: CargoService, route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe(params => this.userId = params['userId']);
  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.cargoService.getCargoAllByUserId(this.pageNumber, this.pageSize, this.sortBy, this.sortDirection, this.userId).subscribe(data => {
        const pageOrders = JSON.parse(data);
        this.cargos = pageOrders.content;
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
