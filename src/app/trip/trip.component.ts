import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {TripService} from "../services/trip/trip.service";
import {Trip} from "../model/trip/trip";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Location} from "@angular/common";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  trip: Trip;
  private id: number;
  private errorMessage: string;
  private routeSubscription: Subscription;
  form: any;

  constructor(private tripService: TripService, private route: ActivatedRoute, private formBuilder: FormBuilder, private location: Location) {
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
      }
    );
  }

  goBack() {
    this.location.back();
  }
}
