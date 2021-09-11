import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/user'

  constructor(private http: HttpClient) { }

  login(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/login', user)
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user)
  }
}
