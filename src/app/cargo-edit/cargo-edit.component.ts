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
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      weight: new FormControl(0, [Validators.required, Validators.min(0)]),
      width: new FormControl(0, [Validators.required, Validators.min(0)]),
      length: new FormControl(0, [Validators.required, Validators.min(0)]),
      height: new FormControl(0, [Validators.required, Validators.min(0)]),
      location: new FormControl('', [Validators.required, Validators.minLength(3)]),
      transportationCost: new FormControl(0, [Validators.required, Validators.min(0)]),
    });

  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.getCargo();

  }

  setControlValues() {
    this.getNameControl().setValue(this.cargo.name);
    this.getLengthControl().setValue(this.cargo.length);
    this.getLocationControl().setValue(this.cargo.location);
    this.getWeightControl().setValue(this.cargo.weight);
    this.getWidthControl().setValue(this.cargo.width);
    this.getHeightControl().setValue(this.cargo.height);
    this.getTransportationCostControl().setValue(this.cargo.transportationCost);
  }

  getCargo() {
    this.cargoService.getCargoById(this.id).subscribe(data => {
      this.cargo = JSON.parse(data);
      this.setControlValues();
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

    this.cargoService.updateCargo(updatedCargo).subscribe();
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
