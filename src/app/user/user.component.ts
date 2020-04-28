import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user/user.service";
import {User} from "../model/user/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    const infoUser = this.userService.getUserInfo().subscribe(data => {
      this.user = JSON.parse(data);
    })
  }

}
