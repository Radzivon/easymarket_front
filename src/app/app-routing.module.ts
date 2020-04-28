import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {CargoListComponent} from "./cargo-list/cargo-list.component";
import {CargoComponent} from "./cargo/cargo.component";
import {TripComponent} from "./trip/trip.component";
import {TripListComponent} from "./trip-list/trip-list.component";
import {UserListComponent} from "./user-list/user-list.component";
import {ManagerComponent} from "./manager/manager.component";
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {CargoOwnerComponent} from "./cargo-owner/cargo-owner.component";
import {TransporterComponent} from "./transporter/transporter.component";
import {EditTripComponent} from "./edit-trip/edit-trip.component";
import {HomeComponent} from "./home/home.component";
import {CargoAddComponent} from "./cargo-add/cargo-add.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '#',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignUpComponent
  },
  {
    path: "manager",
    component: ManagerComponent
  },
  {
    path: "cargoowner",
    component: CargoOwnerComponent
  },
  {
    path: "transporter",
    component: TransporterComponent
  },
  {
    path: "cargo/all",
    component: CargoListComponent
  },
  {
    path: "cargo/:id",
    component: CargoComponent
  },
  {
    path: "cargo/add",
    component: CargoAddComponent
  }
  ,
  {
    path: "trip/all",
    component: TripListComponent
  },
  {
    path: "trip/:id",
    component: TripComponent
  },
  {
    path: "trip/edit/:id",
    component: EditTripComponent
  },
  {
    path: "user/all",
    component: UserListComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
