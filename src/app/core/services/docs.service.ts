import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { Docs } from '../models/docs.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DocsService {
  private contextUrl = `https://${environment.MOCKAPI_KEY}.mockapi.io/`;

  constructor(private http: HttpClient) {}

  public getDocs(): Observable<Docs> {
    return this.http.get<Docs>(`${this.contextUrl}/docs`);
  }

  public getDoc(id: string): Observable<Docs> {
    return this.http.get<Docs>(`${this.contextUrl}/docs/${id}`);
  }

  public addDoc(name: string, viewerId: string, ownerId: string): Observable<Docs> {
    let doc = {
      name: name,
      positivesCards: [],
      negativesCards: [],
      otherCards: [],
      viewerId: viewerId,
      completed: false,
      ownerId: ownerId,
      docsId: uuidv4(),
    };

    return this.http.post<Docs>(`${this.contextUrl}/docs`, doc);
  }

  public updateDoc(
    id: string,
    name?: string,
    positivesCards?: [],
    negativesCards?: [],
    otherCards?: [],
    viewerId?: string,
    completed?: boolean,
    ownerId?: string,
  ): Observable<Docs> {
    let doc = {
      name: name,
      positivesCards: positivesCards,
      negativesCards: negativesCards,
      otherCards: otherCards,
      viewerId: viewerId,
      completed: completed,
      ownerId: ownerId,
    };

    return this.http.put<Docs>(`${this.contextUrl}/docs/${id}`, doc);
  }

  public deleteDoc(id: string): Observable<Docs> {
    return this.http.delete<Docs>(`${this.contextUrl}/docs/${id}`);
  }
}
