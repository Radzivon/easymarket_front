import {Component, OnInit} from '@angular/core';
import {SignUpInfo} from "../model/singUpInfo/sign-up-info";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: any = {};
  signUpInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.signUpInfo = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password,
      this.form.role);
//todo
  }
}
