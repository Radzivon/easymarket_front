import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {CargoListComponent} from "./cargo-list/cargo-list.component";
import {CargoComponent} from "./cargo/cargo.component";


const routes: Routes = [
  {
    path: "cargo/all",
    component: CargoListComponent
  },
  {
    path: "cargo/:id",
    component: CargoComponent
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
