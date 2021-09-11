import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Cards } from '../models/cards.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private contextUrl = `https://${environment.MOCKAPI_KEY}.mockapi.io/`;

  constructor(private http: HttpClient) {}

  public getCards(): Observable<Cards> {
    return this.http.get<Cards>(`${this.contextUrl}/cards`);
  }

  public getCard(id: string): Observable<Cards> {
    return this.http.get<Cards>(`${this.contextUrl}/cards/${id}`);
  }

  public addCard(ownerId: string, name: string): Observable<Cards> {
    let card = {
      ownerId: ownerId,
      name: name,
      upVotes: [],
      viewerReaction: '',
    };

    return this.http.post<Cards>(`${this.contextUrl}/cards`, card);
  }

  public updateCard(
    id: string,
    ownerId?: string,
    name?: string,
    upVotes?: [],
    viewerReaction?: string,
  ): Observable<Cards> {
    let card = {
      ownerId: ownerId,
      name: name,
      upVotes: upVotes,
      viewerReaction: viewerReaction,
    };

    return this.http.put<Cards>(`${this.contextUrl}/cards/${id}`, card);
  }

  public deleteCard(id: string): Observable<Cards> {
    return this.http.delete<Cards>(`${this.contextUrl}/cards/${id}`);
  }
}
