import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { RegisterUser } from '../models/Register';
import { Observable } from 'rxjs';
import { Login } from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl : string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  public register(user: RegisterUser): Observable<RegisterUser[]> {
    return this.http.post<RegisterUser[]>(`${this.baseUrl+"account/"+"register"}`, user);
  }

  public login(user: Login): Observable<Login> {
    return this.http.post<Login>(`${this.baseUrl+"account/"+"login"}`, user);
  }
}