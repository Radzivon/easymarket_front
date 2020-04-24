import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/';
  private userAllUrl = 'user/all';
  private userUrl = 'user/';
  private userAddUrl = 'user/add';
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
}
