import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginInfo} from "../../model/loginInfo/login-info";
import {Observable} from "rxjs";
import {SignUpInfo} from "../../model/singUpInfo/sign-up-info";
import {JwtResponse} from "../../model/jwtResponse/jwt-response";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'https://cargoapp-tp.herokuapp.com/api/auth/signin';
  private signupUrl = 'https://cargoapp-tp.herokuapp.com/api/auth/signup';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: LoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}
