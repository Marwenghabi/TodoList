import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _registerUserUrl = "http://localhost:3000/user/subscribe";

  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUserUrl,user);
  }
}
