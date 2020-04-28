import {Component, OnInit} from '@angular/core';
import {Cargo} from "../model/cargo/cargo";
import {CargoService} from "../services/cargo/cargo.service";

@Component({
  selector: 'app-free-cargo',
  templateUrl: './free-cargo.component.html',
  styleUrls: ['./free-cargo.component.css']
})
export class FreeCargoComponent implements OnInit {
  pageNumber = 0;
  pageSize = 20;
  sortBy = 'id';
  sortDirection = 'asc';
  cargos: Array<Cargo>;
  pages: Array<number>;

  constructor(private cargoService: CargoService) {
  }

  ngOnInit(): void {
    this.getFreeCargo();
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

}
