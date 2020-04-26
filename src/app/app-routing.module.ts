import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {CargoListComponent} from "./cargo-list/cargo-list.component";
import {CargoComponent} from "./cargo/cargo.component";
import {TripComponent} from "./trip/trip.component";
import {TripListComponent} from "./trip-list/trip-list.component";
import {UserListComponent} from "./user-list/user-list.component";
import {ManagerComponent} from "./manager/manager.component";


const routes: Routes = [
  {
    path: "manager",
    component: ManagerComponent
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
    path: "trip/all",
    component: TripListComponent
  },
  {
    path: "trip/:id",
    component: TripComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
