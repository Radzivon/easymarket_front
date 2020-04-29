import {City} from "../city/city";
import {Cargo} from "../cargo/cargo";

export class Trip {
  id: number;
  currentCity: string;
  car: string;
  isPaid: boolean;
  tripCondition: string;
  cities: Array<City>;
  cargo: Array<Cargo>;
}
