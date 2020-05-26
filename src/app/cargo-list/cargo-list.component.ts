import {Component, OnInit} from '@angular/core';
import {Cargo} from "../model/cargo/cargo";
import {CargoService} from "../services/cargo/cargo.service";

@Component({
  selector: 'app-cargo-list',
  templateUrl: './cargo-list.component.html',
  styleUrls: ['./cargo-list.component.css']
})
export class CargoListComponent implements OnInit {
  pageNumber = 0;
  pageSize = 4;
  sortBy = 'id';
  sortDirection = 'asc';
  cargos: Array<Cargo>;
  pages: Array<number>;

  constructor(private cargoService: CargoService) {
  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.cargoService.getCargoAll(this.pageNumber, this.pageSize, this.sortBy, this.sortDirection).subscribe(data => {
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

  markAsPaid(cargo: Cargo) {
    cargo.isPaid = true;
    this.cargoService.setPaidByCargoId(cargo).subscribe(data=>{
      this.getOrders();
    });
  }
}
