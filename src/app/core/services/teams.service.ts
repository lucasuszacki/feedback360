import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Team } from '../models/team.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private contextUrl = `https://${environment.MOCKAPI_KEY}.mockapi.io/`;

  constructor(private http: HttpClient) {}

  public getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.contextUrl}/teams`);
  }

  public getTeam(id: string): Observable<Team> {
    return this.http.get<Team>(`${this.contextUrl}/teams/${id}`);
  }

  public addTeam(name: string): Observable<Team> {
    let team = {
      name: name,
    };

    return this.http.post<Team>(`${this.contextUrl}/teams`, team);
  }

  public updateTeam(id: string, name: string): Observable<Team> {
    let team = {
      name: name,
    };

    return this.http.put<Team>(`${this.contextUrl}/teams/${id}`, team);
  }

  public deleteTeam(id: string): Observable<void> {
    return this.http.delete<void>(`${this.contextUrl}/teams/${id}`);
  }
}
