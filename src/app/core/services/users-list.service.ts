import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const USERS_LIST = environment.USERS_LIST;
@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  constructor(private http: HttpClient) { }

 public getUsers$(page: number): Observable<object>{
    return this.http.get(`${USERS_LIST}users?page=${page}`);
  }
}
