import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {CargoComponent} from './cargo/cargo.component';
import {CargoListComponent} from './cargo-list/cargo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CargoComponent,
    CargoComponent,
    CargoListComponent
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
