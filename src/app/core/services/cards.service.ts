import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private contextUrl = `https://${environment.MOCKAPI_KEY}.mockapi.io/`;

  constructor(private http: HttpClient) {}

  public getCards(): Observable<any> {
    return this.http.get<string[]>(`${this.contextUrl}/cards`);
  }

  public getCard(id: string): Observable<any> {
    return this.http.get<string[]>(`${this.contextUrl}/cards/${id}`);
  }

  public addCard(ownerId: string, name: string): Observable<any> {
    let card = {
      ownerId: ownerId,
      name: name,
      upVotes: [],
      viewerReaction: '',
    };

    return this.http.post<any>(`${this.contextUrl}/cards`, card);
  }

  public updateCard(
    id: string,
    ownerId?: string,
    name?: string,
    upVotes?: [],
    viewerReaction?: string,
  ): Observable<any> {
    let card = {
      ownerId: ownerId,
      name: name,
      upVotes: upVotes,
      viewerReaction: viewerReaction,
    };

    return this.http.put<any>(`${this.contextUrl}/cards/${id}`, card);
  }

  public deleteCard(id: string): Observable<any> {
    return this.http.delete<any>(`${this.contextUrl}/cards/${id}`);
  }
}
