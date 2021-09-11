import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Teams } from '../models/teams.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private contextUrl = `https://${environment.MOCKAPI_KEY}.mockapi.io/`;

  constructor(private http: HttpClient) {}

  public getTeams(): Observable<Teams> {
    return this.http.get<Teams>(`${this.contextUrl}/teams`);
  }

  public getTeam(id: string): Observable<Teams> {
    return this.http.get<Teams>(`${this.contextUrl}/teams/${id}`);
  }

  public addTeam(name: string): Observable<Teams> {
    let team = {
      name: name,
    };

    return this.http.post<Teams>(`${this.contextUrl}/teams`, team);
  }

  public updateTeam(id: string, name: string): Observable<Teams> {
    let team = {
      name: name,
    };

    return this.http.put<Teams>(`${this.contextUrl}/teams/${id}`, team);
  }

  public deleteTeam(id: string): Observable<Teams> {
    return this.http.delete<Teams>(`${this.contextUrl}/teams/${id}`);
  }
}
