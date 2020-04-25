import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../model/user/user";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/';
  private userAllUrl = 'user/all';
  private userUrl = 'user/';
  private userAddUrl = 'user/add';
  private userBlockUrl = 'user/block/';
  private pageStr = 'page=';
  private pageSizeStr = 'pageSize=';
  private sortByStr = 'sortBy=';
  private order = 'order=';
  private and = '&';

  constructor(private http: HttpClient) {
  }

  getUserAll(page: number, pageSize: number, sortBy: string, sortDir: string): Observable<string> {
    return this.http.get(this.baseUrl + this.userAllUrl
      + '?' + this.pageStr + page + this.and + this.pageSizeStr + pageSize + this.and + this.sortByStr + sortBy
      + this.and + this.order + sortDir, {responseType: 'text'});
  }

  getUserById(id: number) {
    return this.http.get(this.baseUrl + this.userUrl + id, {responseType: 'text'})
  }

  blockUserById(id: number) {
    const user = new User();
    user.setBlock(true);
    return this.http.put<User>(this.baseUrl + this.userBlockUrl + id,
      JSON.stringify(user), httpOptions).subscribe();
  }

  unblockUserById(id: number) {
    const user = new User();
    user.setBlock(false);
    return this.http.put<User>(this.baseUrl + this.userBlockUrl + id,
      JSON.stringify(user), httpOptions).subscribe();
  }
}
