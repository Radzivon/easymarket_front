import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {CargoService} from "../services/cargo/cargo.service";
import {Cargo} from "../model/cargo/cargo";

@Component({
  selector: 'app-cargo-add',
  templateUrl: './cargo-add.component.html',
  styleUrls: ['./cargo-add.component.css']
})
export class CargoAddComponent implements OnInit {
  form: any;
  errorMessage: string;

  constructor(private cargoService: CargoService, private formBuilder: FormBuilder,
              private route: ActivatedRoute, private router: Router, private location: Location) {
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
    }
  }

  saveCargo() {
    const newCargo = new Cargo();
    newCargo.name = this.getNameControl().value;
    newCargo.weight = this.getWeightControl().value;
    newCargo.width = this.getWidthControl().value;
    newCargo.length = this.getLengthControl().value;
    newCargo.height = this.getHeightControl().value;
    newCargo.location = this.getLocationControl().value;
    newCargo.transportationCost = this.getTransportationCostControl().value;
    newCargo.isPaid = false;
    newCargo.cargoCondition = "FREE";

    this.cargoService.saveCargo(newCargo);

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
