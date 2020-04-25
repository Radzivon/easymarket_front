import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {CargoComponent} from './cargo/cargo.component';
import {CargoListComponent} from './cargo-list/cargo-list.component';
import {TripComponent} from './trip/trip.component';
import {TripListComponent} from './trip-list/trip-list.component';
import {UserListComponent} from './user-list/user-list.component';
import {LoginComponent} from './login/login.component';
import {SingUpComponent} from './sing-up/sing-up.component';
import {CargoOwnerComponent} from './cargo-owner/cargo-owner.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CargoComponent,
    CargoComponent,
    CargoListComponent,
    TripComponent,
    TripListComponent,
    UserListComponent,
    LoginComponent,
    SingUpComponent,
    CargoOwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
