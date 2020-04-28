import {Component, OnInit} from '@angular/core';
import {CargoService} from "../services/cargo/cargo.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {Cargo} from "../model/cargo/cargo";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cargo-edit',
  templateUrl: './cargo-edit.component.html',
  styleUrls: ['./cargo-edit.component.css']
})
export class CargoEditComponent implements OnInit {
  form: any;
  errorMessage: string;
  id: number;
  cargo: Cargo;
  private routeSubscription: Subscription;

  constructor(private cargoService: CargoService, private formBuilder: FormBuilder,
              private route: ActivatedRoute, private router: Router, private location: Location) {
    this.form = this.formBuilder.group({
      name: new FormControl(this.cargo.name, [Validators.required, Validators.minLength(3)]),
      weight: new FormControl(this.cargo.weight, [Validators.required, Validators.min(0)]),
      width: new FormControl(this.cargo.width, [Validators.required, Validators.min(0)]),
      length: new FormControl(this.cargo.length, [Validators.required, Validators.min(0)]),
      height: new FormControl(this.cargo.height, [Validators.required, Validators.min(0)]),
      location: new FormControl(this.cargo.location, [Validators.required, Validators.minLength(3)]),
      transportationCost: new FormControl(this.cargo.transportationCost, [Validators.required, Validators.min(0)]),
    });
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.cargoService.getCargoById(this.id).subscribe(data => {
      this.cargo = JSON.parse(data);
    });
  }

  saveCargo() {
    const updatedCargo = new Cargo();
    updatedCargo.id = this.id;
    updatedCargo.name = this.getNameControl().value;
    updatedCargo.weight = this.getWeightControl().value;
    updatedCargo.width = this.getWidthControl().value;
    updatedCargo.length = this.getLengthControl().value;
    updatedCargo.height = this.getHeightControl().value;
    updatedCargo.location = this.getLocationControl().value;
    updatedCargo.transportationCost = this.getTransportationCostControl().value;
    updatedCargo.isPaid = false;
    updatedCargo.cargoCondition = "FREE";

    this.cargoService.updateCargo(updatedCargo);
  }

  goBack() {
    this.location.back();
  }

  getLocationControl() {
    return this.form.get('location');
  }

  getNameControl() {
    return this.form.get('name');
  }

  getWeightControl() {
    return this.form.get('weight');
  }

  getWidthControl() {
    return this.form.get('width');
  }

  getLengthControl() {
    return this.form.get('length');
  }

  getTransportationCostControl() {
    return this.form.get('transportationCost');
  }

  getHeightControl() {
    return this.form.get('height');
  }

}
