import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {TripService} from "../services/trip/trip.service";
import {Trip} from "../model/trip/trip";

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

  constructor(private tripService: TripService, private route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
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
}
