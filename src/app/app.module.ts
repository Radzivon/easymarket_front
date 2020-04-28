import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {CargoComponent} from './cargo/cargo.component';
import {CargoListComponent} from './cargo-list/cargo-list.component';
import {TripComponent} from './trip/trip.component';
import {TripListComponent} from './trip-list/trip-list.component';
import {UserListComponent} from './user-list/user-list.component';
import {LoginComponent} from './login/login.component';
import {CargoOwnerComponent} from './cargo-owner/cargo-owner.component';
import {ManagerComponent} from './manager/manager.component';
import {UserComponent} from './user/user.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TransporterComponent} from './transporter/transporter.component';
import {CurrentTripComponent} from './current-trip/current-trip.component';
import {EditTripComponent} from './edit-trip/edit-trip.component';
import {HomeComponent} from './home/home.component';
import {CargoAddComponent} from './cargo-add/cargo-add.component';
import {TripAddComponent} from './trip-add/trip-add.component';
import {CargoEditComponent} from './cargo-edit/cargo-edit.component';
import {httpInterceptorProviders} from "./interceptor/auth-interceptor.interceptor";

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
    CargoOwnerComponent,
    ManagerComponent,
    UserComponent,
    SignUpComponent,
    TransporterComponent,
    CurrentTripComponent,
    EditTripComponent,
    HomeComponent,
    CargoAddComponent,
    TripAddComponent,
    CargoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
