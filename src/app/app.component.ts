import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "./services/tokenStorage/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';
  private roles: string[];
  authority: string;

  constructor(private tokenStorage: TokenStorageService, private route: Router) {
  }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'MANAGER') {
          this.authority = 'manager';
          return true;
        } else if (role === 'TRANSPORTER') {
          this.authority = 'transporter';
          return true;
        }
        this.authority = 'cargo_owner';
        return true;
      });
    }
  }

  signOut() {
    this.tokenStorage.signOut();
    this.authority = null;
    this.route.navigate(['#']);
  }
}

