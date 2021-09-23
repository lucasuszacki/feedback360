import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { User } from '../models/user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private contextUrl = `https://${environment.MOCKAPI_KEY}.mockapi.io/`;

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.contextUrl}/users`);
  }

  public getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.contextUrl}/users/${id}`);
  }

  public addUser(name: string, teams: string[]): Observable<User> {
    let user = {
      name: name,
      teams: teams,
      userId: uuidv4(),
    };

    return this.http.post<User>(`${this.contextUrl}/users`, user);
  }

  public updateUser(id: string, name?: string, teams?: string[]): Observable<User> {
    let user = {
      name: name,
      teams: teams,
    };

    return this.http.put<User>(`${this.contextUrl}/users/${id}`, user);
  }

  public deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.contextUrl}/users/${id}`);
  }
}
