import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Cargo} from "../model/cargo/cargo";
import {CargoService} from "../services/cargo/cargo.service";

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {
  cargo: Cargo;
  private id: number;
  private errorMessage: string;
  private routeSubscription: Subscription;

  constructor(private cargoService: CargoService, private route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    this.cargoService.getCargoById(this.id).subscribe(data => {
        this.cargo = JSON.parse(data);
      },
      error => {
        this.errorMessage = error.error.message;
      }
    );
  }
}
