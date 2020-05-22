import {Component, OnInit} from '@angular/core';
import {TripService} from "../services/trip/trip.service";
import {Trip} from "../model/trip/trip";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {
  form: any;
  trip: Trip;
  id: number;
  private routeSubscription: Subscription;
  errorMessage: string;

  constructor(private tripService: TripService, private formBuilder: FormBuilder,
              private route: ActivatedRoute, private router: Router, private location: Location) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
    this.form = this.formBuilder.group({
      location: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  ngOnInit(): void {
    this.tripService.getTripById(this.id).subscribe(data => {
        this.trip = JSON.parse(data);
      },
      error => {
        this.errorMessage = error.error.message;
      });
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    }
  }

  editTrip() {
    const editedTrip = new Trip();
    editedTrip.id = this.trip.id;
    editedTrip.currentCity = this.getLocationControl().value;
    editedTrip.car = this.trip.car;
    editedTrip.isPaid = this.trip.isPaid;
    editedTrip.tripCondition = this.trip.tripCondition;
    editedTrip.cities = this.trip.cities;

    this.tripService.editTrip(editedTrip);
    this.router.navigate(['trip/edit/' + this.trip.id])
    this.goBack()
  }

  goBack() {
    this.location.back();
  }

  getLocationControl() {
    return this.form.get('location');
  }
}
