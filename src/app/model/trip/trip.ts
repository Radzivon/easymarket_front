import {City} from "../city/city";
import {Cargo} from "../cargo/cargo";

export class Trip {
  private _id: number;
  private _currentCity: string;
  private _car: string;
  private _isPaid: boolean;
  private _tripCondition: string;
  private _cities: Array<City>;
  private _cargo: Array<Cargo>;

  get currentCity(): string {
    return this._currentCity;
  }

  set currentCity(value: string) {
    this._currentCity = value;
  }

  get car(): string {
    return this._car;
  }

  set car(value: string) {
    this._car = value;
  }

  get isPaid(): boolean {
    return this._isPaid;
  }

  set isPaid(value: boolean) {
    this._isPaid = value;
  }

  get tripCondition(): string {
    return this._tripCondition;
  }

  set tripCondition(value: string) {
    this._tripCondition = value;
  }

  get cities(): Array<City> {
    return this._cities;
  }

  set cities(value: Array<City>) {
    this._cities = value;
  }

  get cargo(): Array<Cargo> {
    return this._cargo;
  }

  set cargo(value: Array<Cargo>) {
    this._cargo = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
