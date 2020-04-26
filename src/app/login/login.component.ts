import {Component, OnInit} from '@angular/core';
import {LoginInfo} from "../model/loginInfo/login-info";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: LoginInfo;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }

  reloadPage() {
    window.location.reload();
  }
}
