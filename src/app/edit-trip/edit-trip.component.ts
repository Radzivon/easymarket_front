import {Component, OnInit} from '@angular/core';
import {TripService} from "../services/trip/trip.service";
import {Trip} from "../model/trip/trip";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

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
              private route: ActivatedRoute, private router: Router) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
    this.form = this.formBuilder.group({
      location: new FormControl( '',[Validators.required, Validators.minLength(3)]),
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
    const editedTrip = new Trip(
      this.trip.id,
      this.getLocationControl().value,
      this.trip.car,
      this.trip.isPaid,
      this.trip.tripCondition,
      this.trip.cities
    );
    this.tripService.editTrip(editedTrip);
      this.router.navigate(['trip/edit/' + this.trip.id])
  }
  backToTransporterPage(){
    this.router.navigate(
      ['/transporter']);
  }
  getLocationControl() {
    return this.form.get('location');
  }
}
