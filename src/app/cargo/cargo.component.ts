import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Cargo} from "../model/cargo/cargo";
import {CargoService} from "../services/cargo/cargo.service";
import {Location} from "@angular/common";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

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
  form: any;

  constructor(private cargoService: CargoService, private formBuilder: FormBuilder, private route: ActivatedRoute, private location: Location) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
    this.form = this.formBuilder.group({
      location: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
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

  goBack() {
    this.location.back();
  }
}
