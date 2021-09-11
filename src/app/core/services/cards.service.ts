import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Card } from '../models/card.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private contextUrl = `https://${environment.MOCKAPI_KEY}.mockapi.io/`;

  constructor(private http: HttpClient) {}

  public getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.contextUrl}/cards`);
  }

  public getCard(id: string): Observable<Card> {
    return this.http.get<Card>(`${this.contextUrl}/cards/${id}`);
  }

  public addCard(ownerId: string, name: string): Observable<Card> {
    let card = {
      ownerId: ownerId,
      name: name,
      upVotes: [],
      viewerReaction: '',
    };

    return this.http.post<Card>(`${this.contextUrl}/cards`, card);
  }

  public updateCard(
    id: string,
    ownerId?: string,
    name?: string,
    upVotes?: [],
    viewerReaction?: string,
  ): Observable<Card> {
    let card = {
      ownerId: ownerId,
      name: name,
      upVotes: upVotes,
      viewerReaction: viewerReaction,
    };

    return this.http.put<Card>(`${this.contextUrl}/cards/${id}`, card);
  }

  public deleteCard(id: string): Observable<void> {
    return this.http.delete<void>(`${this.contextUrl}/cards/${id}`);
  }
}
