import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://18.221.238.224:9000/api/user'

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post<User>('http://18.221.238.224:9000/api/login', user)
  }

  logout(): Observable<any> {
    sessionStorage.removeItem('loggedInUser')
    return this.http.post<any>('http://18.221.238.224:9000/api/logout', {})
  }

  register(user: User): Observable<any> {
    return this.http.post<User>(this.apiUrl, user)
  }

  getFriends(): Observable<any> {
    return this.http.get<User[]>(this.apiUrl)
  }

  getFriendById(id: number): Observable<any> {
    return this.http.get<User>(this.apiUrl + "/" + id)
  }

  updateUser(user: User): Observable<any> {
    return this.http.patch<User>(this.apiUrl + "/update", user)
  }

  sendResetPasswordLink(email: string): Observable<any> {
    return this.http.post<User>("http://18.221.238.224:9000/api/forgot", {userEmail: email})
  }

  getUserByResetToken(resetToken: string): Observable<any> {
    return this.http.get<User>(`http://18.221.238.224:9000/api/user/token/${resetToken}`)
  }

  updatePassword(user: User): Observable<any> {
    return this.http.post<User>(`http://18.221.238.224:9000/api/user/resetPassword`, user)
  }
}
