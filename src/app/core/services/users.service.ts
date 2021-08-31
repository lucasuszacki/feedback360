import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private contextUrl = `https://${environment.MOCKAPI_KEY}.mockapi.io/`;

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get<string[]>(`${this.contextUrl}/users`);
  }

  public getUser(id: string): Observable<any> {
    return this.http.get<string[]>(`${this.contextUrl}/users/${id}`);
  }

  public addUser(name: string, team: string): Observable<any> {
    let user = {
      name: name,
      team: team,
      userId: Math.random(),
    };

    return this.http.post<any>(`${this.contextUrl}/users`, user);
  }

  public updateUser(id: string, name?: string, team?: string): Observable<any> {
    let user = {
      name: name,
      team: team,
    };

    return this.http.put<any>(`${this.contextUrl}/users/${id}`, user);
  }

  public deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.contextUrl}/users/${id}`);
  }
}
