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
      name: new FormControl('', [Validators.required, Validators.minLength(1)]),
      weight: new FormControl(0, [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]),
      width: new FormControl(0, [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]),
      length: new FormControl(0, [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]),
      height: new FormControl(0, [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]),
      location: new FormControl('', [Validators.required, Validators.pattern(/^[A-ZА-Я]{1}[a-zа-яё]+$/)]),
      transportationCost: new FormControl(0, [Validators.required, Validators.pattern(/^[0-9]+$/)]),
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
    console.log(updatedCargo)
    this.cargoService.updateCargo(updatedCargo).subscribe();
    this.goBack();
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

  getAllControl() {
    return this.getNameControl().invalid || this.getLocationControl().invalid || this.getWeightControl().invalid
      || this.getWidthControl().invalid || this.getLengthControl().invalid
      || this.getTransportationCostControl().invalid || this.getHeightControl().invalid
  }
}
