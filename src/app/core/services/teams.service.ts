import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private contextUrl = `https://${environment.MOCKAPI_KEY}.mockapi.io/`;

  constructor(private http: HttpClient) {}

  public getTeams(): Observable<any> {
    return this.http.get<string[]>(`${this.contextUrl}/teams`);
  }

  public getTeam(id: string): Observable<any> {
    return this.http.get<string[]>(`${this.contextUrl}/teams/${id}`);
  }

  public addTeam(name: string): Observable<any> {
    let team = {
      name: name,
    };

    return this.http.post<any>(`${this.contextUrl}/teams`, team);
  }

  public updateTeam(id: string, name: string): Observable<any> {
    let team = {
      name: name,
    };

    return this.http.put<any>(`${this.contextUrl}/teams/${id}`, team);
  }

  public deleteTeam(id: string): Observable<any> {
    return this.http.delete<any>(`${this.contextUrl}/teams/${id}`);
  }
}
