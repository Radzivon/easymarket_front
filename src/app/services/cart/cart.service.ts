import {Injectable} from '@angular/core';
import {Cargo} from "../../model/cargo/cargo";
import {City} from "../../model/city/city";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cargo: Array<Cargo>;
  private _cities: Array<City>;

  constructor() {
    this._cargo = new Array<Cargo>();
    this._cities = new Array<City>();
  }

  addCargoToCart(cargo: Cargo): boolean {
    for(let temp of this.cargo){
      if(temp === cargo){
        return false;
      }
    }
    this._cargo.push(cargo);
    this._cities.push(new City(cargo.location));
    return true;
  }

  deleteCargoFromCart(cargo: Cargo) {
    const index = this._cargo.indexOf(cargo);
    if (index > -1) {
      this.deleteCityFromCart(new City(this._cargo[index].location));
      this._cargo.splice(index, 1);
    }
  }

  deleteCityFromCart(city: City) {
    const index = this._cities.indexOf(city);
    if (index > -1) {
      this._cities.splice(index, 1);
    }
  }

  clear() {
    this._cargo = new Array<Cargo>();
    this._cities = new Array<City>();
  }

  get cargo(): Array<Cargo> {
    return this._cargo;
  }

  get cities(): Array<City> {
    return this._cities;
  }
}

