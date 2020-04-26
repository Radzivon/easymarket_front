import {Component, OnInit} from '@angular/core';
import {User} from "../model/user/user";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  user: User;
  active = 1;
  constructor() {
  }

  ngOnInit(): void {
  }



}
