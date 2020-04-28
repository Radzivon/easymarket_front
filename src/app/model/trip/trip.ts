import {City} from "../city/city";

export class Trip {
  id: number;
  currentCity: string;
  car: string;
  isPaid: boolean;
  tripCondition: string;
  cities: Array<City>;

  constructor(id: number, currentCity: string, car: string, isPaid: boolean, tripCondition: string, cities: Array<City>) {
    this.id = id;
    this.currentCity = currentCity;
    this.car = car;
    this.isPaid = isPaid;
    this.tripCondition = tripCondition;
    this.cities = cities;
  }
}
