import {Injectable} from '@angular/core';
import {Trip} from "../../model/trip/trip";

@Injectable({
  providedIn: 'root'
})
export class TripEditService {
  private _tripForEdit: Trip;

  constructor() {
  }

  set tripForEdit(value: Trip) {
    this._tripForEdit = value;
  }

  get tripForEdit(): Trip {
    return this._tripForEdit;
  }

  clear() {
    this.tripForEdit = new Trip();
  }
}
