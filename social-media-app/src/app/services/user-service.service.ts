import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:9000/api/user'

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post<User>('http://localhost:9000/api/login', user)
  }

  logout(): Observable<any> {
    sessionStorage.removeItem('loggedInUser')
    return this.http.post<any>('http://localhost:9000/api/logout', {})
  }

  register(user: User): Observable<any> {
    return this.http.post<User>(this.apiUrl, user)
  }

  getFriends(): Observable<any> {
    return this.http.get<User[]>(this.apiUrl)
  }
}
