import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { Doc } from '../models/doc.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DocsService {
  private contextUrl = `https://${environment.MOCKAPI_KEY}.mockapi.io/`;

  constructor(private http: HttpClient) {}

  public getDocs(): Observable<Doc[]> {
    return this.http.get<Doc[]>(`${this.contextUrl}/docs`);
  }

  public getDoc(id: string): Observable<Doc> {
    return this.http.get<Doc>(`${this.contextUrl}/docs/${id}`);
  }

  public addDoc(name: string, viewerId: string, teamId: string, ownerId?: string): Observable<Doc> {
    let doc = {
      name: name,
      positivesCards: [],
      negativesCards: [],
      otherCards: [],
      viewerId: viewerId,
      completed: false,
      ownerId: ownerId,
      docsId: uuidv4(),
      teamId: teamId,
    };

    return this.http.post<Doc>(`${this.contextUrl}/docs`, doc);
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
    teamId?: string,
  ): Observable<Doc> {
    let doc = {
      name: name,
      positivesCards: positivesCards,
      negativesCards: negativesCards,
      otherCards: otherCards,
      viewerId: viewerId,
      completed: completed,
      ownerId: ownerId,
      teamId: teamId,
    };

    return this.http.put<Doc>(`${this.contextUrl}/docs/${id}`, doc);
  }

  public deleteDoc(id: string): Observable<void> {
    return this.http.delete<void>(`${this.contextUrl}/docs/${id}`);
  }
}
